"use client";
import React, { useMemo } from "react";
import { UseFormReturn, FieldValues } from "react-hook-form";
import { FormFieldType } from "./type";
import { cn } from "@src/lib/utils";
import { FormTag } from "./form-tag";
import { FieldRenderer } from "./field-renderer";
import { FormControl, FormField } from "../ui/form";

type FormProps = {
  onSubmit: any;
  form: UseFormReturn<any, any>;
  disabled?: boolean;
  fields: FormFieldType[];
  className?: string;
};

export const Form = ({
  form,
  fields,
  disabled = false,
  className,
  onSubmit,
}: FormProps) => {
  const style = useMemo(
    () => cn("col-span-full sm:col-span-6 md:col-span-4", className),
    [className],
  );
  return (
    <FormTag
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      className={className}
      isLoading={disabled}
    >
      <>
        {fields.map((input, i) => (
          <div key={i} className={style}>
            <FormField
              name={input.name}
              control={form.control}
              render={({ field }) => (
                <FieldRenderer input={input} field={field} />
              )}
            />
          </div>
        ))}
      </>
    </FormTag>
  );
};
