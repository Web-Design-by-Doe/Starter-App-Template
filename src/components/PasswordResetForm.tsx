"use client";

import { useFormState, useFormStatus } from "react-dom";

import { passwordReset } from "@/app/_actions";
import { Form, Input } from "@/components";
import { Button } from "./ui/button";
import { passwordResetFormState } from "@/utils/initialFormStates";

type Props = {
  userId: string;
  secret: string;
};

export default function PasswordResetForm({ userId, secret }: Props) {
  const initialState = {
    ...passwordResetFormState,
    userId,
    secret,
  };

  const [state, formAction] = useFormState(passwordReset, initialState);

  return (
    <>
      <Form action={formAction}>
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
          error={state?.error?.password?._errors[0]}
        />
        <Input
          type="password"
          name="confirm_password"
          placeholder="Confirm your new password"
          error={state?.error?.confirm_password?._errors[0]}
        />
        <Input
          placeholder=""
          type="text"
          name="userId"
          hidden
          value={userId}
          readOnly
        />
        <Input
          placeholder=""
          type="text"
          name="secret"
          hidden
          value={secret}
          readOnly
        />
        <Button size="lg">Reset Password</Button>
      </Form>
    </>
  );
}
