"use client";
import { Form } from "@src/components/form/form";
import { FormFieldType } from "@src/components/form/type";
import { useForm } from "react-hook-form";

const formFields: FormFieldType[] = [
  {
    name: "email",
    label: "Email",
    required: true,
    type: "date",
  },
  {
    name: "password",
    label: "Password",
    required: true,
    type: "password",
  },
];
export default function Home() {
  return (
    <div>
      <Form
        fields={formFields}
        form={useForm()}
        loading={false}
        onSubmit={() => {}}
      />
    </div>
  );
}
