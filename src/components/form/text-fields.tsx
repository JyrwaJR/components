import { FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldType } from "./type";

type TextFieldProps = {
  input: FormFieldType;
  field: any;
};

export const TextField = ({ input, field }: TextFieldProps) => {
  return (
    <FormItem className="w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <Input
        {...field}
        className="flex"
        placeholder={input.placeholder || "Please enter a value"}
      />
      <FormDescription>{input.helperText ?? " "}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
