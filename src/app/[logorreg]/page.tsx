import LoginPage from "@/components/loginandregister/login-page";
import RegisterPage from "@/components/loginandregister/register-page";

export default async function Login(props: {
  params: Promise<{ logorreg: string }>;
}) {
  const { logorreg } = await props.params;
  return logorreg === "login" ? <LoginPage /> : <RegisterPage />;
}
