import { format, parse } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@src/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "../ui/form";
import { FormFieldType } from "./type";
import { Button } from "../ui/button";
import { cn } from "@src/lib/utils";
import { FormFieldLabel } from "./form-field-label";
import { ControllerRenderProps } from "react-hook-form";
type DateFieldProps = {
  input: FormFieldType;
  field: ControllerRenderProps<any, any>;
};

export const DateField = ({ input, field }: DateFieldProps) => {
  return (
    <FormItem className="w-full">
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
                typeof field.value === "string" && field.value.includes("/") ? (
                  format(
                    parse(field.value, "dd/MM/yyyy", new Date()),
                    "yyyy-MM-dd",
                  )
                ) : (
                  format(field.value, "yyyy-MM-dd")
                )
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
      <div className="max-w-full">
        <FormDescription>{input.helperText}</FormDescription>
        <FormMessage />
      </div>
    </FormItem>
  );
};
