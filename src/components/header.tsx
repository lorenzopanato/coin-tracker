import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center text-mainGray font-medium shadow shadow-zinc-700">
      <nav className="flex justify-between items-center max-w-screen-2xl w-full py-5 px-10">
        <Link href={"/"} className="bg-gradient-to-tr from-primary to-mainGray text-transparent bg-clip-text transition-colors text-xl font-semibold">
          cointracker.
        </Link>
        <ul className="text-mainGray flex gap-6 items-center">
          <li className="relative group flex justify-start">
            <Link href={"#"} className="hover:text-primary transition-all">
              Home
            </Link>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <Link href={"#"} className="hover:text-primary transition-all">
              About us
            </Link>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <Link href={"#"} className="hover:text-primary transition-all">
              Pricing
            </Link>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <Link href={"#"} className="hover:text-primary transition-all">
              Blog
            </Link>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
          <li className="relative group flex justify-start">
            <Link href={"#"} className="hover:text-primary transition-all">
              Our app
            </Link>
            <span className="h-[1px] absolute -bottom-1 rounded-full bg-gradient-to-r from-background to-primary transition-all duration-300 w-0 group-hover:w-full"></span>
          </li>
        </ul>
        <button className="bg-primary shadow-inner text-black rounded-full font-semibold px-10 py-2">
          Contact
        </button>
      </nav>
    </header>
  );
}
