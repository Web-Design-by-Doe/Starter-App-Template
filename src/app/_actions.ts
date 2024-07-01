"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { redirect } from "next/navigation";
import { ID } from "node-appwrite";

import {
  LoginSchema,
  RegisterSchema,
  ResetPasswordRequestSchema,
  ResetPasswordSchema,
  UpdateUserNameSchema,
} from "@/utils/validationSchemas";
import { createAdminClient, createSessionClient } from "@/utils/appwrite";

export async function loginUser(state: any, formData: FormData) {
  const { account } = await createAdminClient();
  let redirectPath: string | null = null;
  try {
    const result = LoginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (result.error) {
      throw { error: result.error.format() };
    }

    const { email, password } = result.data;
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("auth-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirectPath = "/dashboard";
  } catch (error: any) {
    if (error.type === "user_invalid_credentials") {
      return {
        ...state,
        error: { ...state.error, unauthorised: "Invalid credentials" },
      };
    }
    console.log(error);
    return error;
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function logoutUser() {
  let redirectPath: string | null = null;
  const { account } = await createSessionClient();
  try {
    const result = await account.deleteSession("current");
    cookies().delete("auth-session");
    redirectPath = "/login";
  } catch (error) {
    console.log(error);
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function registerWithEmail(state: any, formData: FormData) {
  const { account } = await createAdminClient();
  let redirectPath: string | null = null;

  try {
    const result = RegisterSchema.safeParse({
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
    });

    if (result.error) {
      throw { error: result.error.format() };
    }

    const { first_name, last_name, email, password } = result.data;
    const fullName = first_name + " " + last_name;

    await account.create(ID.unique(), email, password, fullName);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("auth-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirectPath = "/";
  } catch (error: any) {
    if (error.type === "user_already_exists") {
      console.log(error);
    }
    console.log(error);
    return error;
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
}

export async function getLoggedInUser() {
  if (!cookies().get("auth-session")) {
    return null;
  }
  const { account } = await createSessionClient();

  try {
    const session = await account.get();
    return session;
  } catch (error) {
    console.log("this is the error", error);
  }
}

export async function sendPasswordResetEmail(state: any, formData: FormData) {
  const { account } = await createAdminClient();
  const redirectUrl =
    "https://localhost:3000/forgot-password/confirm-password-reset";

  try {
    const result = ResetPasswordRequestSchema.safeParse({
      email: formData.get("email"),
    });

    if (result.error) {
      throw { error: result.error.format() };
    }

    const { email } = result.data;
    const restRequestPromise = await account.createRecovery(email, redirectUrl);
  } catch (error) {
    return {
      ...state,
      error: { ...state.error },
    };
  }
}

export async function passwordReset(state: any, formData: FormData) {
  const { account } = await createAdminClient();

  try {
    const result = ResetPasswordSchema.safeParse({
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
      userId: formData.get("userId"),
      secret: formData.get("secret"),
    });

    if (result.error) {
      throw { error: result.error.format() };
    }

    const { password, userId, secret } = result.data;
    const restRequestPromise = await account.updateRecovery(
      userId,
      secret,
      password
    );
  } catch (error) {
    return {
      ...state,
      error: { ...state.error },
    };
  } finally {
    redirect("http://localhost:3000/account");
  }
}

export async function updateUserName(state: any, formData: FormData) {
  const { account } = await createAdminClient();

  try {
    const result = UpdateUserNameSchema.safeParse({
      name: formData.get("name"),
    });

    if (result.error) {
      throw { error: result.error.format() };
    }

    const { name } = result.data;
    const updatePromise = await account.updateName(name);

    return { ...state, name };
  } catch (error) {
    return {
      ...state,
      error: { ...state.error },
    };
  } finally {
    redirect("http://localhost:3000/account");
  }
}
