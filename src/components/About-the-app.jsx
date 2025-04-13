import Image from "next/image"

export default function About_the_app() {
  return (
    <div className="py-[24px] lg:py-[48px] px-[43px] lg:px-[282px] text-center flex items-center flex-col gap-[48px] min-w-[375px] lg:w-full">
      <div className="flex flex-col min-h-[136px] gap-[12px]">
        <h2 className="font-[900] text-[36px] tracking-[-1%] leading-[100%] min-h-[84px] lg:h-[42px] min-w-[288px] lg:w-[704px] text-[var(--normalH1Lightmode)]">Get more done in <span className="text-[#08C056]">less time</span></h2>
        <p className="tracking-[-1%] leading-[30px] text-[var(--textLightmode)] text-[24px] h-[30px]">Simple, fast, effortlessly.</p>
      </div>
      <div className="min-w-[239px] lg:w-[876px] lg:min-h-[64px] min-h-[240px] flex flex-col lg:flex-row gap-[24px] lg:gap-[96px] text-[#00006D] font-bold justify-around text-[var(--atpText)]">
        <div className="flex items-center gap-[24px] ">
          <Image src="/svg/Transparent-Pricing.svg" alt="Transparent Pricing image" width="64" height="64" />
          <p className="">Transparent Pricing</p>
        </div>
        <div className="flex items-center gap-[24px]">
          <Image src="/svg/Easy-Integrations.svg" alt="Easy Integrations image" width="64" height="64" />
          <p className="">Easy Integrations</p>
        </div>
        <div className="flex items-center gap-[24px]">
          <Image src="/svg/Superb-Efficiency.svg" alt="Superb Efficiency image" width="64" height="64" />
          <p className="">Superb Efficiency</p>
        </div>
      </div>
    </div>
  )
}