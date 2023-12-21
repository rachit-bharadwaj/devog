import Link from "next/link";

import { RegisterForm } from "@/components/auth";

const RegisterPage = () => {
  return (
    <div className="flex flex-col p-5 items-center justify-center text-center gap-5">
      <Link href="/" className="text-3xl font-bold uppercase">
        Dev.og
      </Link>

      <div className="flex flex-col">
        <p className="text-5xl font-extrabold text-gradient p-5">Register</p>
        <p className="text-gray-300">
          Once you sign up, your personal feed will be ready to explore.
        </p>
      </div>

      <RegisterForm />

      <div className="flex">
        <p className="text-gray-400">Already a dev.og member?</p>&nbsp;
        <Link href="/login" className="underline">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
