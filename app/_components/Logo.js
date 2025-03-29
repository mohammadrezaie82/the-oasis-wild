import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 px-1 sm:gap-4">
      <Image
        src={logo}
        height="40"
        quality={100}
        width="40"
        alt="The Wild Oasis logo"
        className="md:w-[50px] md:h-[50px]"
      />
      <span className=" font-semibold text-primary-100 text-xs sm:text-sm md:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
