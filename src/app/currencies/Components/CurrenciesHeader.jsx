//app/currencies/Components/CurrenciesHeader.jsx
import Image from "next/image";

export default function CurrenciesHeader() {
  return (
    <div className="xl:w-full min-w-[375px] bg-[#DECBE9] h-[532px] xl:h-[476px] mt-[24px] xl:my-[24px] relative overflow-hidden">
      <section className="xl:w-[1440px] w-[311px] px-[32px] xl:px-[96px] py-[24px] xl:py-[48px] mx-auto flex flex-col xl:flex-row items-center justify-around xl:gap-[72px] relative z-10">
        <div className="flex flex-col gap-[24px] xl:gap-[64px] w-[311px] text-center xl:text-start xl:w-[576px] h-[210px]">
          <h1 className="font-black text-[36px] xl:text-[48px] leading-[100%] tracking-[-1%]">Today’s Cryptocurrency prices</h1>
          <p className="leading-[30px] tracking-[-1%] text-[20px] xl:text-[24px]">
            The global crypto market cap is{" "}
            <span className="font-bold text-[24px]  tracking-[-1%]">
              $1.86T
            </span>
          </p>
        </div>

        <div className="xl:w-[449.88px] h-[264px] xl:h-[327.63px] relative">
          <Image
            src="/Images/Composition_04 1.png"
            alt="Currencies picture"
            width={449.88}
            height={327.63}
            className="object-contain w-[264px] h-[264px] xl:w-[449.88px] xl:h-[327.63px]"
          />

          {/* big mouse with shadow */}
          <div className="absolute w-[80.px] h-[102px] xl:top-[185px] left-3 xl:left-[60.7px] bottom-6 xl:-bottom-10">
            <Image
              src="/svg/Currencies/specular.svg"
              alt="Mouse"
              width={63}
              height={66}
              className="left-[49px] filter brightness-[20%] invert-[98%] w-[36px] h-[38px] xl:w-[63px] xl:w-[66px] xl:scale-140
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] "
            />
          </div>

          {/* fat yellow ball */}
          <div className="absolute top-1/3 xl:top-[30%] right-[18px] xl:right-[60px]">
            <Image
              src="/Images/Composition_02_1.png"
              alt="elements"
              width={55}
              height={45}
              className="w-[38px] h-[31px] xl:w-[55px] xl:h-[45px] scale-110"
            />
          </div>

          {/* small yellow ball */}
          <div className="absolute top-[46%] xl:top-[46%] -left-1 xl:left-8">
            <Image
              src="/Images/Composition_02_2.png"
              alt="elements"
              width={30}
              height={24}
              className="w-[21px] h-[17px] xl:w-[30px] xl:h-[24px] scale-110"
            />
          </div>

          {/* green mouse */}
          <div className="absolute bottom-9 xl:bottom-4 right-5 xl:right-[70px]">
            <Image
              src="/Images/Composition_02 2.png"
              alt="elements"
              width={70}
              height={59}
              className="w-[44px] h-[36px] xl:w-[70px] xl:h-[59px] scale-120"
            />
          </div>

          {/* white mouse at upright */}
          <div className="absolute top-12 -right-4 xl:left-[367px] xl:top-1/6 transform -translate-y-1/2">
            <Image
              src="/Images/elements-2.png"
              alt="List"
              width={60}
              height={65}
              className="w-[65px] h-auto xl:scale-110 scale-55"
            />
          </div>


          {/* wheel  */}
          <div className="absolute top-[130px] right-0 xl:top-[150px]">
            <Image
              src="/Images/Composition_02_3.png"
              alt="Other elements"
              width={84}
              height={57}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </section>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 left-1/4 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-pink-200 rounded-full opacity-30"></div>
      </div>
    </div>
  );
}