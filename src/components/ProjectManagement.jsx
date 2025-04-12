import Image from "next/image";

export default function ProjectManagementComponent() {
  return (
    <div id="How-it-works" className="py-[24px] lg:py-[48px] px-[43px] xl:px-[282px] text-center flex items-center flex-col gap-[40px] min-w-[375px] xl:w-[1550px] mx-auto scroll-mt-[50px]">
      <h1 className="text-[#2140D4] font-sans font-black lg:text-[48px] text-[36px] tracking-[-0.01em] leading-[1] text-center`">Fully reinventer project management system to help you ship products faster</h1>
      <p className='tracking-[-0.01em] leading-[30px] font-[400] text-[20px] lg:text-[24px] text-[#7E8186] text-center'>
        Focus on what matters most, out robots handle the rest ☕
      </p>
      <Image
        src="/Images/Phone_img.png"
        alt="project phone image"
        width={650}
        height={500}
        className="w-[350px] h-[220px] object-cover md:w-[460px] md:h-[330px] lg:object-contain lg:w-[650px] lg:h-[500px] xl:ml-40 xl:scale-140 "
      />
    </div>
  )
}