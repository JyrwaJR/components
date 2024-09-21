import { InputProps } from "react-day-picker";
import { RegisterOptions } from "react-hook-form";

export interface OptionsT {
  label: string;
  value: string | number | boolean | any;
}

export interface FormFieldType {
  name: string;
  label?: string;
  required?: boolean;
  defaultValue?: string | number | boolean | Date | undefined | any;
  register?: RegisterOptions;
  helperText?: string;
  rows?: number;
  multiline?: boolean;
  type?: string;
  readOnly?: boolean;
  options?: OptionsT[];
  inputProps?: InputProps;
  placeholder?: string;
}
