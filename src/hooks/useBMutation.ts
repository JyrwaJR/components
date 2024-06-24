interface BMutationProps {
  queryKey: string[];
  url: string;
  method: "POST" | "PUT" | "DELETE" | "PATCH";
}

interface ApiResponse {
  status: number;
  message: string;
  data?: any;
  error?: any;
  success?: boolean;
}

interface HeaderType {
  headers: {
    Authorization: string;
    contentType: string;
  };
}

interface MutationProps<T> {
  token: string;
  data?: T;
  method: "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
}
const mutationFn = async <T>({
  token,
  data = {} as T,
  method,
  url,
}: MutationProps<T>) => {
  try {
    let response;
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
    const uri = `${apiBaseUrl}/${url}`;
    console.log("Mutation URL=> ", uri);
    const header: HeaderType = {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
    };
    switch (method) {
      case "POST":
        response = await axios.post(uri, data, header);
        break;
      case "PUT":
        response = await axios.put(uri, data, header);
        break;
      case "DELETE":
        response = await axios.delete(uri, header);
        break;
      case "PATCH":
        response = await axios.patch(uri, data, header);
        break;
      default:
        throw new Error(`Invalid method: ${method}`);
    }
    if (response.status === 200) {
      showToast(SuccessToastTitle, response.data.message);
      return response.data;
    }

    return response.data;
  } catch (error: any) {
    if (error instanceof AxiosError) {
      console.log("Mutation Axios Error => ", error.response?.data);
      showToast(
        FailedToastTitle,
        error.response?.data.message || "An error occurred"
      );
      return;
    }
    showToast(
      FailedToastTitle,
      error.message || "An error occurred",
      "destructive"
    );
    return;
  }
};

export function useBMutation<TData = unknown>({
  queryKey,
  url,
  method,
}: BMutationProps) {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const mutation = useMutation<ApiResponse, unknown, TData>({
    mutationKey: queryKey,
    networkMode: "online",
    mutationFn: async (data: TData) =>
      await mutationFn({
        data: data,
        token: token,
        method: method,
        url: url,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKey,
      });
    },
  });

  const isErrorToast = useCallback(() => {
    if (mutation.isError) {
      showToast(
        FailedToastTitle,
        mutation.error?.message || mutation.error?.response?.data?.message,
        "destructive"
      );
    }
  }, [
    mutation.isError,
    mutation.error?.message,
    mutation.error?.response?.data?.message,
  ]);

  const isSuccessToast = useCallback(() => {
    if ((mutation.data?.message !== undefined, mutation.data?.message)) {
      showToast(SuccessToastTitle, mutation.data?.message);
    }
  }, [mutation.data?.message]);

  useEffect(() => {
    isErrorToast();
  }, [isErrorToast]);

  useEffect(() => {
    isSuccessToast();
  }, [isSuccessToast]);

  return mutation;
}
