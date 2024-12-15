import Background from "@/components/loginandregister/background-img";
import { RegisterForm } from "@/components/util/forms";

export default function RegisterPage() {
  return (
    <section className="relative md:grid grid-cols-2 items-center">
      <Background />
      <RegisterForm />
    </section>
  );
}
