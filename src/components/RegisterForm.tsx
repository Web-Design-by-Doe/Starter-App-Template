"use client";

import { useFormState, useFormStatus } from "react-dom";

import { registerWithEmail } from "@/app/_actions";
import { Form, Input } from "@/components";
import { Button } from "@/components/ui/button";

import { registerFormState } from "@/utils/initialFormStates";

export default function RegisterForm() {
  const [state, formAction] = useFormState(
    registerWithEmail,
    registerFormState
  );
  // const { pending } = useFormStatus();

  return (
    <Form action={formAction}>
      <div className="flex gap-2 w-full">
        <Input
          type="text"
          name="first_name"
          placeholder="First Name"
          error={state?.error?.first_name?._errors[0]}
        />
        <Input
          type="text"
          name="last_name"
          placeholder="Last Name"
          error={state?.error?.last_name?._errors[0]}
        />
      </div>
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        error={state?.error?.email?._errors[0]}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        error={state?.error?.password?._errors[0]}
      />
      <Input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        error={state?.error?._errors[0]}
      />
      <Button type="submit" size="lg">
        Register
      </Button>
    </Form>
  );
}
