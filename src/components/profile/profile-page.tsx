import { getUserFromSession } from "@/library/session";
import { zillaSlab } from "@/app/fonts/fonts";
import Link from "next/link";

export default async function UserDetails() {
  const userFromSession = getUserFromSession();
  return (
    <section
      className={`flex flex-col gap-6 ${zillaSlab.className} antialiased`}
    >
      <div className="border p-6 rounded-3xl font-bold">
        <p>
          {" "}
          {(await userFromSession).user.firstname}{" "}
          {(await userFromSession).user.lastname}
        </p>
        <p>{(await userFromSession).user.email}</p>
        <p>Role: {(await userFromSession).user.role}</p>
      </div>

      <div className="border p-6 rounded-3xl">
        <div className="font-bold flex justify-between">
          <h2>Personal Information</h2>
          <p>
            <Link href={"/profile/edit"}>Edit</Link>
          </p>
        </div>

        <section className=" max-w-[700px]">
          <div className="md:grid md:grid-cols-2 gap-2">
            <div className="flex  flex-col py-6 gap-4">
              <p className="font-bold">First Name</p>
              <p>{(await userFromSession).user.firstname}</p>
            </div>
            <div className="flex  flex-col py-6 gap-4">
              <p className="font-bold">Last Name</p>
              <p>{(await userFromSession).user.lastname}</p>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-2">
            <div className="flex  flex-col py-6 gap-4">
              <p className="font-bold">Email</p>
              <p>{(await userFromSession).user.email}</p>
            </div>
            <div className="flex  flex-col py-6 gap-4">
              <p className="font-bold">Role</p>
              <p>{(await userFromSession).user.role}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
