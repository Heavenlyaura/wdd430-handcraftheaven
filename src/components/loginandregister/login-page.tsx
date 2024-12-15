import Background from "@/components/loginandregister/background-img";
import { LoginForm } from "../util/login-form";

export default function LoginPage() {
  return (
    <section className="relative md:grid grid-cols-2 items-center">
      <Background />
      <LoginForm />
    </section>
  );
}
