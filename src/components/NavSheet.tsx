import Link from "next/link";
import { CircleUser, Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { DarkModeToggle } from "@/components";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getLoggedInUser } from "@/app/_actions";
import LogoutButton from "./LogoutButton";

export const navigationLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Login",
    href: "/login",
  },
  {
    text: "Register",
    href: "/register",
  },
  {
    text: "Dashboard",
    href: "/dashboard",
  },
];

export async function NavSheet() {
  const isAuthenticated = await getLoggedInUser();
  return (
    <header className="fixed w-full top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm ">
        {navigationLinks.map((link) => {
          if (link.href === "/dashboard" && !isAuthenticated) {
            return null;
          }
          if (
            isAuthenticated &&
            (link.href === "/login" || link.href === "/register")
          ) {
            return null;
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.text}
            </Link>
          );
        })}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0  md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            {navigationLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.text}
                </Link>
              );
            })}
            <DarkModeToggle />
          </nav>
        </SheetContent>
      </Sheet>

      {isAuthenticated && (
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
}
