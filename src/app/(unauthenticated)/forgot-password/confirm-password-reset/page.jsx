import { PasswordResetForm } from "@/components";

export default function ResetPassword({ searchParams }) {
  return (
    <PasswordResetForm
      userId={searchParams.userId}
      secret={searchParams.secret}
    />
  );
}
