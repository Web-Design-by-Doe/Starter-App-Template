"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

import { Pen, Check } from "lucide-react";

import { updateUserName } from "@/app/_actions";
import { Button } from "@/components/ui/button";

import { Input } from "./ui/input";
import { Form } from "@/components";

import { updateUserNameFormState } from "@/utils/initialFormStates";
import { Label } from "@radix-ui/react-label";

// import { firstCharToUppercase } from "@/utils/firstCharToUppercase";

type Account = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  labels: any[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  mfa: boolean;
  prefs: any;
  targets: any[];
  accessedAt: string;
};

export default function UpdateUserNameForm({ account }: { account: Account }) {
  const [state, formAction] = useFormState(
    updateUserName,
    updateUserNameFormState
  );

  // const { pending } = useFormStatus();

  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    return setIsEditing(!isEditing);
  }

  return (
    <>
      <Form action={formAction}>
        <Label htmlFor="name" className="text-md flex items-center gap-2">
          Your name
        </Label>
        <div className="flex gap-2">
          <Input
            id="name"
            type="text"
            name="name"
            // defaultValue={firstCharToUppercase(account?.name)}
            defaultValue={account?.name}
            disabled={!isEditing}
            className={
              isEditing ? "focus-visible:ring-2" : "focus-visible:ring-0"
            }
          />

          <Button onClick={handleEdit} className="w-12 p-0">
            {!isEditing ? (
              <Pen className="h-6 w-6" />
            ) : (
              <Check className="h-6 w-6" />
            )}
          </Button>
        </div>
      </Form>
    </>
  );
}
