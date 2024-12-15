"use client";
import Link from "next/link";
import googleIcon from "../../../public/other/google.png";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";
import { login } from "@/library/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export function LoginForm() {
  return (
    <div
      className={`${zillaSlab.className} antialiased md:absolute md:top-20 md:left-24 flex flex-col bg-white md:rounded-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 md:w-fit p-6`}
    >
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <form action="/login" method="POST" className="flex flex-col p-4 gap-4">
        <input
          className="border focus:border-[#964B00] outline-none md:w-[400px] p-4 rounded-3xl "
          type="text"
          id="username"
          name="username"
          required
          placeholder="Email"
        />

        <input
          className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
        />

        <button
          className="bg-black rounded-3xl text-white px-8 py-4"
          type="submit"
        >
          Login
        </button>
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
export function RegisterForm() {
  const [state, loginAction] = useActionState(login, undefined);
  return (
    <div
      className={`${zillaSlab.className} antialiased md:absolute md:top-14 md:left-24 flex flex-col bg-white md:rounded-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 md:w-fit p-6`}
    >
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <form
        action={loginAction}
        method="POST"
        className="flex flex-col p-4 gap-4"
      >
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col">
            <input
              className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
              type="text"
              id="firstname"
              name="firstname"
              required
              placeholder="First Name"
            />
            {state?.errors.firstname && (
              <p className="text-sm text-red-600">{state.errors.firstname}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
              type="text"
              id="lastname"
              name="lastname"
              required
              placeholder="Last Name"
            />
            {state?.errors.lastname && (
              <p className="text-sm text-red-600">{state.errors.lastname}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row justify-center gap-6">
            <label className="flex items-center">
              <input type="radio" name="role" value="buyer" className="mr-2" />
              Buyer
            </label>
            <label className="flex items-center">
              <input type="radio" name="role" value="seller" className="mr-2" />
              Seller
            </label>
          </div>

          {state?.errors.role && (
            <p className="text-sm text-red-600">{state.errors.role}</p>
          )}
        </div>

        <input
          className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
        />
        {state?.errors.email && (
          <p className="text-sm text-red-600">{state.errors.email}</p>
        )}

        <input
          className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
          type="password"
          id="password"
          name="password"
          // required
          placeholder="Password"
        />
        {state?.errors.password && (
          <div>
            {state.errors.password.map((error, index) => {
              return (
                <p className="text-sm text-red-600" key={index}>
                  {error}
                </p>
              );
            })}
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
        Have an account?{" "}
        <Link className="font-bold" href="/login">
          Login
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
      Register
    </button>
  );
}
