"use client";
import Link from "next/link";
import googleIcon from "../../../public/other/google.png";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/library/actions";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div
      className={`${zillaSlab.className} antialiased md:absolute md:top-20 md:left-24 flex flex-col bg-white md:rounded-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 md:w-fit p-6`}
    >
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <form action={loginAction} className="flex flex-col p-4 gap-4">
        <input
          className="border focus:border-[#964B00] outline-none md:w-[400px] p-4 rounded-3xl "
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
        />
        {state?.errors?.email && (
          <p className="text-red-500 text-sm">{state.errors.email}</p>
        )}
        <input
          className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
        />
        {state?.errors &&
          typeof state.errors === "object" &&
          state.errors.password &&
          Array.isArray(state.errors.password) && (
            <div>
              {state.errors.password.map((error, index) => (
                <p className="text-sm text-red-600" key={index}>
                  {error}
                </p>
              ))}
            </div>
          )}

        <SubmitButton />
      </form>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-600"> OR </span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <Link
        href={`#`}
        className="flex justify-center bg-white rounded-3xl text-black border border-black px-8 py-4 gap-1 w-full m-auto"
      >
        <Image src={googleIcon} width={24} alt="Google Icon" />
        Google
      </Link>

      <p className="text-center p-6">
        Don&apos;t have an account?{" "}
        <Link className="font-bold" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-black rounded-3xl text-white px-8 py-4"
      type="submit"
    >
      Login
    </button>
  );
}
