import Link from "next/link";

import { LoginForm } from "@/components/auth";

const LoginPage = () => {
  return (
    <div className="flex flex-col p-5 items-center justify-center text-center gap-5 h-screen">
      <Link href="/" className="text-3xl font-bold uppercase">
        Dev.og
      </Link>

      <div className="flex flex-col">
        <p className="text-5xl font-extrabold text-gradient p-5">Login</p>
        <p className="text-gray-300">Proceed to access your personal feed.</p>
      </div>

      <LoginForm />

      <div className="flex">
        <p className="text-gray-400">Don&apos;t have an account?</p>&nbsp;
        <Link href="/register" className="underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
