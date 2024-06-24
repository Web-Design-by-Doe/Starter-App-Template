import Link from "next/link";

import { DarkModeToggle } from "@/components";

export default function Nav() {
  return (
    <nav className="flex items-center justify-center p-4 relative">
      <ul className="flex space-x-4">
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <div className="absolute p-4 right-0">
        <DarkModeToggle />
      </div>
    </nav>
  );
}
