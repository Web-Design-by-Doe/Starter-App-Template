"use client";

import { useFormState, useFormStatus } from "react-dom";

import { sendPasswordResetEmail } from "@/app/_actions";
import { Form, Input } from "@/components";
import { Button } from "./ui/button";

import { passwordResetRequestFormState } from "@/utils/initialFormStates";

export default function ResetPasswordRequestForm() {
  const [state, formAction] = useFormState(
    sendPasswordResetEmail,
    passwordResetRequestFormState
  );
  // const { pending } = useFormStatus();

  return (
    <>
      <Form action={formAction}>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          error={state?.error?.email?._errors[0]}
        />
        <Button size="lg">Send Reset Email</Button>
      </Form>
    </>
  );
}
