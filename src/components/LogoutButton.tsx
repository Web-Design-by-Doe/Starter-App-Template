"use client";

import { logoutUser } from "@/app/_actions";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return (
    <Button
      onClick={() => logoutUser()}
      type="button"
      variant="destructive"
      size="lg"
    >
      Logout
    </Button>
  );
}
