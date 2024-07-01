import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Invalid Password" }),
});

export const RegisterSchema = z
  .object({
    first_name: z
      .string()
      .trim()
      .min(1, { message: "Your first name is required" }),
    last_name: z
      .string()
      .trim()
      .min(1, { message: "Your last name is required" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Your password must be at least 8 characters" }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
      });
    }
  });

export const ResetPasswordRequestSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Your new password must be at least 8 characters" }),
    confirm_password: z.string(),
    userId: z.string(),
    secret: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords must match",
      });
    }
  });
