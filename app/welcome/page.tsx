import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="dark:bg-gradient-welcome-dark h-screen">
      <Link href="/">Dev.og</Link>
      <p className="text-gradient text-5xl font-[900]">Lets jump back in!</p>
    </div>
  );
};

export default WelcomePage;
