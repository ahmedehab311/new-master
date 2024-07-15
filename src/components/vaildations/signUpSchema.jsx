// src/schemas/signupSchema.js
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }).max(20),
  lastName: z.string().min(2, { message: "Last name is required" }).max(20),
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, { message: "Password should contain at least 1 special character" }),
  confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine((input) => input.password === input.confirmPassword, {
  message: "Password and confirm password do not match",
  path: ["confirmPassword"],
});

export default signUpSchema;
