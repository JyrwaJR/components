"use client";
import { UseFormReturn } from "react-hook-form";
import { FormFieldType, OptionsT } from "./type";
import { cn } from "@src/lib/utils";
import React, { useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@src/components/ui/calendar";
import { Input } from "../ui/input";
import { format } from "date-fns";
import { FormTag } from "./form-tag";

type FormProps<T> = {
  onSubmit: () => void;
  form: UseFormReturn<T | any>;
  defaultValue?: T | any;
  loading: boolean;
  fields: FormFieldType[];
  className?: string;
};

export const Form = <T,>({
  form,
  fields,
  defaultValue,
  loading = false,
  className,
  onSubmit,
}: FormProps<T>) => {
  const style = cn(
    "col-span-full md:col-span-full sm:col-span-full space-y-2 p-1 rounded-lg",
    className
  );
  const [showPassword, setShowPassword] = useState(false);
  const onClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <FormTag
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      className={className}
      isLoading={loading}
    >
      <React.Fragment>
        {!loading ? (
          <React.Fragment>
            {fields.map((input: FormFieldType, i) => (
              <div key={i} className={style}>
                <FormField
                  name={input.name}
                  control={form.control}
                  defaultValue={defaultValue?.[input.name]}
                  render={({ field }) => (
                    <div className="w-full">
                      {input.select ? (
                        <FormItem className="w-full">
                          <FormLabel>
                            {input.label}{" "}
                            {input.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={defaultValue?.[input.name]}
                            value={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder={"Select an option"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {input.options?.map(
                                (option: OptionsT, i: number) => (
                                  <React.Fragment key={i}>
                                    <SelectItem value={option.value as string}>
                                      {option.label}
                                    </SelectItem>
                                  </React.Fragment>
                                )
                              )}
                            </SelectContent>
                            <FormMessage />
                            <FormDescription>
                              {input.helperText}
                            </FormDescription>
                          </Select>
                        </FormItem>
                      ) : input.type === "date" ? (
                        <FormItem className="flex flex-col justify-center h-full">
                          <FormLabel>
                            {input.label}{" "}
                            {input.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                // disabled={(date) =>
                                //   date > new Date() ||
                                //   date < new Date("1900-01-01")
                                // }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                          <FormDescription>{input.helperText}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      ) : (
                        <React.Fragment key={i}>
                          <FormItem className="w-full">
                            <FormLabel>
                              {input.label}{" "}
                              {input.required && (
                                <span className="text-red-500">*</span>
                              )}
                            </FormLabel>
                            <Input
                              {...field}
                              className="flex"
                              placeholder={"Please enter a value"}
                              disabled={input.readOnly}
                              type={
                                input.type === "password" && showPassword
                                  ? "text"
                                  : input.type
                              }
                            />
                            <FormDescription>
                              {input.helperText}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        </React.Fragment>
                      )}
                    </div>
                  )}
                />
              </div>
            ))}
            <div className="w-full px-3 col-span-full">
              {fields.find((input) => input.type === "password") && (
                <Button
                  variant="link"
                  className="px-0 text-sm"
                  type="button"
                  onClick={onClickShowPassword}
                >
                  {showPassword ? "Hide" : "Show"} password
                </Button>
              )}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {fields.map((input, i) => (
              <div key={input.name + i} className={style}>
                <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    </FormTag>
  );
};
