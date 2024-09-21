import { ControllerRenderProps } from "react-hook-form";
import { FormDescription, FormItem, FormMessage } from "../ui/form";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldType } from "./type";
import { Textarea } from "../ui/textarea";

type TextAreaProps = {
  input: FormFieldType;
  field: ControllerRenderProps<any, any>;
};

export const TextAreaFields = ({ input, field }: TextAreaProps) => {
  return (
    <FormItem className="w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <Textarea
        {...field}
        className="flex"
        rows={input.rows || 4}
        placeholder={input.placeholder || "Please enter a value"}
      />
      <FormDescription>{input.helperText ?? " "}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
