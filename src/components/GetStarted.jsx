import Image from "next/image";

export default function GetStartedComponent() {
  return (
    <div className="py-[48px] flex justify-center min-h-[398px] min-w-[375px]">
      <div className="relative md:w-[1100px] min-h-[558px] md:min-h-[432px] md:rounded-[56px] overflow-hidden bg-[var(--GetStarted)]">
        <Image
          src="/Images/Frame_14.png"
          alt="Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "var(--GetStartedBg)",
            mixBlendMode: "multiply"
          }}
        />

        <div className="relative min-h-[196px] top-[118px] md:left-[20px] flex flex-col justify-center md:px-[57px] text-white ">
          <div className="relative max-w-[944px] flex flex-col md:flex-row gap-[48px]">
            <div className="md:max-w-[659px] min-w-[311px] md:h-[208px] gap-[32px] text-center md:text-start flex flex-col ">
              <h1 className="text-[36px] font-black text-[#2140D4] tracking-[-1%] leading-[100%]">
                Risk-free 30 day trial to <br className="hidden md:block"/><span className="text-[#08C056]">level up</span> your team’s productivity.
              </h1>
              <p className="text-[24px] leading-[40px] tracking-[-1%] font-normal text-[#0445B1]">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
            </div>
            <button 
            className="md:absolute bottom-0 right-0 bg-[#08C056] min-w-[331px] md:w-[223px] h-[64px] py-[16px] flex gap-[10px] px-[32px] rounded-[48px] cursor-pointer mx-auto justify-center">
              <span className="text-[20px] font-[700] text-[#F7FAFC] min-w-[90px] md:w-[211px] h-[32px]">
                Get Started
              </span>
              <Image src="/svg/Go-forward.svg" alt="Go forward image" width="24" height="24" className="w-auto h-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}