import axios from "axios";
interface BQueryProps {
  queryKey: any[];
  url: string;
  enabled?: boolean;
  staleTime?: number;
}

interface ApiResponse {
  status: number;
  message: string;
  data?: any;
  error?: any;
  success?: boolean;
}

type QueryFNProps = {
  token: string;
  url: string;
};

const queryFn = async ({ token, url }: QueryFNProps) => {
  try {
    if (!token) {
      return;
    }
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;
    const uri = `${apiBaseUrl}/${url}`;
    console.log("URI =>", uri);

    const response: ApiResponse = await axios.get(uri, {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
    });
    if (response?.data === undefined) {
      return;
    } else if (response.status === 200) {
      return response.data;
    }
    return;
  } catch (error: any) {
    console.log("Query Function Error =>", error);
    if (error instanceof AxiosError) {
      if (error.code === "ERR_NETWORK") {
        showToast(FailedToastTitle, error.message);
        return;
      }
      showToast(FailedToastTitle, error.response?.data.message);
      return;
    }
    showToast(FailedToastTitle, error.message, "destructive");
    return;
  }
};

function useBQuery({ queryKey, url, enabled = true }: BQueryProps) {
  const isEnableQuery: boolean = enabled && // get token here
  const query = useQuery<ApiResponse>({
    queryKey: queryKey,
    enabled: isEnableQuery,
    staleTime: queryStateTime,
    refetchOnWindowFocus: true,
    networkMode: "online",
    queryFn: async () =>
      await queryFn({
        token: "",//set token here
        url: url,
      }),
  });

  useEffect(() => {
    if (query.isError) {
      query.error?.message;
    }
  }, [query.isError, query.error?.message]);

  return {
    ...query,
  };
}

export default useBQuery;
// install axios react-query @types/react-query @types/axios
// shadcn toast