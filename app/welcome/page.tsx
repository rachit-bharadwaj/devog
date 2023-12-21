import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="dark:bg-gradient-welcome-dark h-screen flex justify-center items-center flex-col text-center gap-10 p-10">
      <Link href="/" className="text-3xl font-bold uppercase">
        Dev.og
      </Link>

      <p className="text-gradient text-5xl font-[900]">Lets jump back in!</p>

      <p className="text-gray-300">
        Please resume onboarding to unlock the entire feature suite of Devog.
        The magic awaits inside! ✨
      </p>

      <Link
        href="/login"
        className="flex gap-3 items-center text-xl bg-gray-100 text-dark py-3 px-14 rounded-xl font-bold"
      >
        Continue <FaLongArrowAltRight />
      </Link>
    </div>
  );
};

export default WelcomePage;
