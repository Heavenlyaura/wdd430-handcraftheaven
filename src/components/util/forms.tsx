import Link from "next/link";
import googleIcon from "../../../public/other/google.png";
import Image from "next/image";
import { zillaSlab } from "@/app/fonts/fonts";

export function LoginForm() {
  return (
    <div
      className={`${zillaSlab.className} antialiased md:absolute md:top-20 md:left-24 flex flex-col bg-white md:rounded-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-1 md:w-fit p-6`}
    >
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <form action="/login" method="POST" className="flex flex-col p-4 gap-4">
        <label htmlFor="username">Email</label>
        <input
          className="border focus:border-[#964B00] outline-none md:w-[400px] p-4 rounded-3xl "
          type="text"
          id="username"
          name="username"
          required
          placeholder="johndoe@example.com"
        />

        <label htmlFor="password">Password</label>
        <input
          className="border focus:border-[#964B00] outline-none p-4 rounded-3xl "
          type="password"
          id="password"
          name="password"
          required
          placeholder="**********"
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
        Don't have an account?{" "}
        <Link className="font-bold" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
