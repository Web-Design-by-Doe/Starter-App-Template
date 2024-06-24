import { LoginForm } from "@/components";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Login</h1>
      <LoginForm />
    </main>
  );
}
