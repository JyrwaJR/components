import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@src/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormFieldType } from "./type";
import { Button } from "../ui/button";
import { cn } from "@src/lib/utils";
import { FormFieldLabel } from "./form-field-label";
type DateFieldProps = {
  input: FormFieldType;
  field: any;
};

export const DateField = ({ input, field }: DateFieldProps) => {
  return (
    <FormItem className="max-w-full">
      <FormFieldLabel label={input.label} required={input.required} />
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between pl-3 text-left font-normal",
                !field.value && "text-muted-foreground",
              )}
            >
              {field.value ? (
                format(new Date(field.value), "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={new Date(field.value)}
            onSelect={field.onChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <FormDescription>{input.helperText}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
