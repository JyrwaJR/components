import { SelectField } from "./select-field";
import { TextField } from "./text-fields";
import { PasswordField } from "./password-field";
import { NumberField } from "./number-field";
import { DateField } from "./date-fields";
import { FormFieldType } from "./type";
import { ControllerRenderProps } from "react-hook-form";
import { TextAreaFields } from "./text-area-field";

type FieldRendererProps = {
  input: FormFieldType;
  field: ControllerRenderProps<any, any>;
};

export const FieldRenderer = ({ input, field }: FieldRendererProps) => {
  switch (input.type) {
    case "select":
      return <SelectField input={input} field={field} />;
    case "password":
      return <PasswordField input={input} field={field} />;
    case "number":
      return <NumberField input={input} field={field} />;
    case "date":
      return <DateField input={input} field={field} />;
    case "textarea":
      return <TextAreaFields input={input} field={field} />;
    default:
      return <TextField input={input} field={field} />;
  }
};
