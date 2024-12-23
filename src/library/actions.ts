"use server";
import { createReview, createUser, getUser } from "./data";
import {
  SignUpFormSchema,
  LoginFormSchema,
  User,
  UserFromSession,
  AddReview,
} from "./definitions";
import bcrypt from "bcrypt";
import { getEmail } from "./data";
import { redirect } from "next/navigation";
import { createSession, decrypt, getUserFromSession } from "./session";
import { cookies } from "next/headers";
import { error } from "console";
import productDetail from "@/app/products/[id]/page";

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

export async function login(prevState: any, formData: FormData) {
  const validationResults = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResults.success) {
    return {
      errors: validationResults.error.flatten().fieldErrors,
    };
  }

  const data = await getUser(validationResults.data.email);

  if (!data) {
    return {
      errors: {
        email: ["Email does not exist"],
      },
    };
  }

  const isPasswordMatch = await bcrypt.compare(
    validationResults.data.password,
    data.password
  );

  if (!isPasswordMatch) {
    return {
      errors: {
        email: ["Email or Password is incorrect"],
      },
    };
  }
  const user: UserFromSession = {
    userid: data.userid,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    role: data.role,
  };

  await createSession(user);
  redirect("/");
}

const isAuthenticated = async () => {
  const cookie = (await cookies()).get("session")?.value;
  if (!cookie) return false;
  return true;
};

export async function addReview(prevState: any, formData: FormData) {
  const user = await getUserFromSession();
  if (!user) return redirect("/login");

  const review: AddReview = {
    rate: formData.get("rate") as unknown as number,
    review: formData.get("review") as string,
    productid: formData.get("productid") as string,
  };

  if (!review.rate) return { message: "Rate is required" };

  const addReviewToDb = await createReview(review);
  if (!addReviewToDb)
    return {
      message: "Failed to add review",
    };

  return {
    message: "Your rating has been recorded",
  };
}
export default isAuthenticated;
