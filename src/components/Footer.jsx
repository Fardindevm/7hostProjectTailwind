import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import DarkLightButtons from './DarkLightButtons'
import FardinMohammadi from "./FardinMohammadi";

export default function FooterComponent() {
  return (
    <footer className="xl:px-[96px] min-w-[375px] 2xl:w-[1440px] mx-auto">
      <div className="py-[42px] px-[111px] lg:px-6 xl:px-[96px] 2xl:px-[111px] flex flex-col gap-[64px] mih-h-[594px] lg:h-[292px]">
        <div className="flex flex-col items-center lg:flex-row gap-[42px] lg:gap-[189px]">
          <div className="flex flex-col items-center lg:items-start w-[77px] lg:w-[149px] gap-[56px] h-[32px] lg:h-[120px]">
            <Link href="https://7ho.st/">
              <Image
                src="/svg/Logo.svg"
                width={77}
                height={32}
                alt="7host Logo for footer"
                className="w-[77px] h-[32px]"
              />
            </Link>
            <div className="w-[112px] hidden lg:block">
              <DarkLightButtons />
            </div>
          </div>

          <div className="flex flex-col gap-[26px] lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4 lg:min-h-[120px] min-h-[224px] lg:min-w-[291px] lg:h-[120px]">
            <div className="flex flex-col gap-[26px] lg:gap-0 lg:space-y-5">
              {[
                { text: 'Pricing', href: '/#Feature1' },
                { text: 'How it Works', href: '/#How-it-works' },
                { text: 'FAQ', href: '/#faq' }
              ].map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  className="block text-lg font-bold text-[#4C5D77] leading-[24px] h-[24px] w-[208px] text-[16px] hover:opacity-60 duration-500 "
                >
                  {text}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-[26px] lg:gap-0 lg:space-y-5">
              {['Terms of Service', 'Privacy Policy'].map((text) => (
                <Link
                  key={text}
                  href="#"
                  className="block text-lg font-bold text-[#4C5D77] leading-[24px] h-[24px] w-[208px] text-[16px] hover:opacity-60 duration-500"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[32px] min-w-[208px] w-auto min-h-[104px] lg:h-[120px]">
            <SocialIcons />
            <div className="w-[112px] block lg:hidden">
              <DarkLightButtons />
            </div>
          </div>
        </div>

        <FardinMohammadi />
      </div>
    </footer>
  );
}
