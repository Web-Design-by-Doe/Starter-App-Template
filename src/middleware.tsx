import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isLoggedIn = cookies().get("auth-session") || null;

  const url = request.url;

  if (!isLoggedIn && shouldRedirectToRegister(url)) {
    return NextResponse.redirect(new URL("/register", url));
  }

  if (isLoggedIn && shouldRedirectToAccount(url)) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }

  return NextResponse.next();
}

function shouldRedirectToRegister(url: string) {
  return (
    url.includes("account") ||
    url.includes("settings") ||
    url.includes("dashboard")
  );
}

function shouldRedirectToAccount(url: string) {
  return url.includes("login") || url.includes("register");
}

export const config = {
  matcher: ["/account", "/dashboard", "/login", "/register"],
};
