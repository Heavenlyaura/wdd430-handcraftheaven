"use server";
import { createUser } from "./data";
import { SignUpFormSchema } from "./definitions";
import bcrypt from "bcrypt";
import { getEmail } from "./data";
import { redirect } from "next/navigation";

export async function register(prevState: any, formData: FormData) {
  const validationResults = SignUpFormSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    role: formData.get("role"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResults.success) {
    return {
      errors: validationResults.error.flatten().fieldErrors,
    };
  } else {
    const checkEmail = await getEmail(validationResults.data.email);
    if (checkEmail.rowCount) {
      return { errors: "Email already exists" };
    }
  }

  const hashedPassword = await bcrypt.hash(validationResults.data.password, 10);

  await createUser(validationResults.data, hashedPassword);

  redirect("/login");
}
