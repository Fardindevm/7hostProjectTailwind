import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="fixed min-w-[375px] z-[99999999] top-0 left-0 lg:pl-6  lg:bg-[#FAFBFFCC] border-b border-[#C8D7FF]/80 w-screen">
      <div className="min-w-[375px] 2xl:w-[1440px] mx-auto flex justify-between items-center px-6 xl:px-[96px] py-[12px] h-[80px]">
        <div className="flex items-center gap-[100px]">
          <Link href="/" className="duration-300 hover:opacity-70">
            <Image src="/svg/Logo.svg" alt="7host-logo" width={76.16} height={18.24} />
          </Link>

          <div className="hidden font-[700] text-[#4C5D77] lg:flex gap-[48px]">
            <Link href="/#Feature1" className="hover:opacity-60 duration-300">Pricing</Link>
            <Link href="/#How-it-works" className="hover:opacity-60 duration-300">How it Works</Link>
            <Link href="/#faq" className="hover:opacity-60 duration-300">FAQ</Link>
            <Link href="/currencies" className="hover:opacity-60 duration-300 text-[#08C056]">Currencies</Link>
          </div>
        </div>

        <div className="hidden lg:flex gap-[32px] font-bold">
          <Link href="/">
            <button className="rounded-[32px] h-[56px] w-[117px] hover:bg-gray-200/80 duration-300">
              <span>Sign In</span>
            </button>
          </Link>
          <Link href="/">
            <button className="rounded-[32px] h-[56px] w-[154px] bg-[#2140D4] text-[#F7FAFC] hover:bg-[#2140D4]/80 duration-300">
              <span>Get Started</span>
            </button>
          </Link>
        </div>

        <MobileMenu />
      </div>
    </div>
  );
}
