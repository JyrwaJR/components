import { ControllerRenderProps } from "react-hook-form";
import { FormDescription, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldType } from "./type";

type NumberFieldProps = {
  input: FormFieldType;
  field: ControllerRenderProps<any, any>;
};

export const NumberField = ({ input, field }: NumberFieldProps) => {
  return (
    <FormItem className="w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <Input
        {...field}
        className="flex"
        placeholder={input.placeholder || "Please enter a value"}
        disabled={input.readOnly}
        inputMode="numeric"
        type="number"
        onChange={(e) => {
          const value = Number(e.target.value);
          field.onChange(value);
        }}
      />
      <FormDescription>{input.helperText}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
