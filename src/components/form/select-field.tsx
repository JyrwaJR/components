import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "../ui/form";
import { FormFieldType, OptionsT } from "./type";
import { FormFieldLabel } from "./form-field-label";
import { ControllerRenderProps } from "react-hook-form";
type SelectFieldProps = {
  input: FormFieldType;
  field: ControllerRenderProps<any, any>;
};

export const SelectField = ({ input, field }: SelectFieldProps) => {
  return (
    <FormItem className="w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <Select onValueChange={field.onChange} value={field.value.toString()}>
        <FormControl className="w-full">
          <SelectTrigger>
            <SelectValue ref={field.ref} placeholder="Select an option" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {input.options?.map((option: OptionsT, i: number) => (
            <SelectItem key={i} value={option.value.toString()}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
      <FormDescription>{input.helperText}</FormDescription>
    </FormItem>
  );
};
