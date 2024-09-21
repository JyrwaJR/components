"use client";

import { Form, FormFieldType } from "@src/components/form";
import { Card } from "@src/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
];
const schema = z.object({
  date: z.date().min(new Date()),
  confirmPassword: z.string(),
  email: z.string().email(),
  number: z.number(),
  password: z.string(),
});
type schemaType = z.infer<typeof schema>;
const Page = () => {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<schemaType> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="p-4">
        <Form onSubmit={onSubmit} fields={formFields} form={form} />
      </Card>
    </div>
  );
};
export default Page;
