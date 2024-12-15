import { deleteSession } from "@/library/session";
import { redirect } from "next/navigation";

export async function GET() {
  await deleteSession();
  return redirect("/login");
}
