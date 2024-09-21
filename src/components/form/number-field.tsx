import { FormDescription, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldType } from "./type";

type NumberFieldProps = {
  input: FormFieldType;
  field: any;
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
        onChange={(e) => {
          const value =
            input.type === "number" ? Number(e.target.value) : e.target.value;
          field.onChange(value);
        }}
        type={"number"}
      />
      <FormDescription>{input.helperText}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
