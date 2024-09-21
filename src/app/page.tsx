"use client";

import { Form, FormFieldType } from "@src/components/form";
import { Card } from "@src/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
const formFields: FormFieldType[] = [
  {
    name: "date",
    label: "Date",
    type: "date",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "number",
    label: "Number",
    type: "number",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    name: "selectString",
    label: "Select String",
    required: true,
    type: "select",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
  {
    name: "selectNumber",
    label: "Select Number",
    required: true,
    type: "select",
    options: [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
      { label: "Option 3", value: 3 },
    ],
  },
  {
    name: "textarea",
    label: "Textarea",
    type: "textarea",
    required: true,
  },
];
const schema = z.object({
  date: z.string().refine((val) => format(val, "yyyy-MM-dd"), {
    message: "Please select a date",
  }),
  confirmPassword: z.string(),
  email: z.string().email(),
  number: z.number(),
  password: z.string(),
  selectString: z.string(),
  selectNumber: z.number(),
  textarea: z.string(),
});
type schemaType = z.infer<typeof schema>;
const Page = () => {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date().toISOString(),
      confirmPassword: "confirmPassword",
      email: "harrison@gmail.com",
      number: 1111,
      password: "password",
      selectString: "2",
      selectNumber: 1,
      textarea: "text area",
    },
  });
  const onSubmit: SubmitHandler<schemaType> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-4 w-auto">
        <Form onSubmit={onSubmit} fields={formFields} form={form} />
      </Card>
    </div>
  );
};
export default Page;
