import { FormLabel } from "../ui/form";

export const FormFieldLabel = ({ label, required }: any) => {
  return (
    <FormLabel className="flex items-center space-x-1">
      <div>{label}</div>
      {required && <span className="text-red-500">*</span>}
    </FormLabel>
  );
};
