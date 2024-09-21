import { useRef, useState } from "react";
import { FormDescription, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { FormFieldType } from "./type";
import { Button } from "../ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { FormFieldLabel } from "./form-field-label";

type PasswordFieldProps = {
  input: FormFieldType;
  field: any;
};

export const PasswordField = ({ input, field }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormItem className="w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <div className="flex space-x-1">
        <Input
          {...field}
          ref={ref}
          placeholder={input.placeholder || "Please enter a value"}
          disabled={input.readOnly}
          type={showPassword ? "text" : "password"}
        />
        <Button
          type="button"
          name={input.name}
          variant="secondary"
          onClick={toggleShowPassword}
          size="icon"
        >
          {showPassword ? (
            <EyeOpenIcon className="w-4 h-4" />
          ) : (
            <EyeClosedIcon className="w-4 h-4" />
          )}
        </Button>
      </div>
      <FormDescription>{input.helperText ?? " "}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
