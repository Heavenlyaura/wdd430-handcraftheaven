import Background from "@/components/login/background-img";
import { LoginForm } from "@/components/util/forms";

export default function LoginPage() {
  return (
    <section className="relative md:grid grid-cols-2 items-center">
      <Background />
      <LoginForm />
    </section>
  );
}
