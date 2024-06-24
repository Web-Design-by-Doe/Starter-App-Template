"use client";

import { Form, Input } from "@/components";
import { Button } from "./ui/button";
import login from "@/app/actions";

export default function LoginForm() {
  return (
    <Form action={login}>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  );
}
