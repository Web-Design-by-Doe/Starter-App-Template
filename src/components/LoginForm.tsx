"use client";

import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

import { Form, Input } from "@/components";
import { Button } from "./ui/button";
import { loginUser } from "@/app/_actions";

import { loginFormState } from "@/utils/initialFormStates";
import { useEffect } from "react";

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, loginFormState);

  console.log("state in client", state);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.error?.unauthorised) {
      formRef.current?.reset();
    }
  }, [state?.error?.unauthorised]);

  return (
    <>
      {state?.error?.unauthorised && (
        <p className="text-red-500 text-sm">{state.error.unauthorised}</p>
      )}
      <Form action={formAction}>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          error={state?.error?.email?._errors[0]}
        />
        <Input
          type="password"
          name="password"
          placeholder="Your Password"
          error={state?.error?.password?._errors[0]}
        />
        <Button type="submit" size="lg">
          Login
        </Button>
      </Form>
      <Link href="/forgot-password">Forgot your password?</Link>
    </>
  );
}
