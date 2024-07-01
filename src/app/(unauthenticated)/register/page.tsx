import { RegisterForm } from "@/components";

export default function Register() {
  return (
    <main className="flex gap-24 flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Register</h1>
      <RegisterForm />
    </main>
  );
}
