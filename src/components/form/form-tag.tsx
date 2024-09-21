import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Form } from "../ui/form";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";

type FormTagProps<T> = {
  form: UseFormReturn<T | any>;
  children: React.ReactNode;
  onSubmit: SubmitHandler<T | any>;
  isLoading?: boolean;
  className?: string;
  buttonTitle?: string;
};

export const FormTag = <T,>({
  form,
  children,
  onSubmit,
  className,
  isLoading = false,
  buttonTitle = "Submit",
}: FormTagProps<T>) => {
  const styles = cn("grid w-full content-center grid-cols-12 gap-4", className);
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles}
      >
        {children}
        <div className="col-span-full flex md:justify-end justify-center items-center">
          <Button
            disabled={!form.formState.isDirty || isLoading}
            type="submit"
            className="w-full md:w-auto"
          >
            {isLoading ? "Loading" : buttonTitle}
          </Button>
          {/* </DialogFooter> */}
        </div>
      </form>
    </Form>
  );
};
