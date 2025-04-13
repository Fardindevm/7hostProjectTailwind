import Image from "next/image";
import Link from 'next/link';

export default function FeatureSection({
  id,
  imageUrl,
  imageUrlDark,
  imageAlt,
  title,
  description,
  isReversed = false,
  linkUrl = "/",
}) { 

  return (
    <div id={id} className="min-w-[375px] 2xl:w-[1440px] min-h-[730px] lg:h-auto mx-auto py-[24px] lg:py-[48px] px-[32px] ">
      <div className={`flex flex-col lg:flex-row gap-[48px] lg:justify-around items-center py-[48px] max-h-[624px] ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        <div className={`min-w-[311px] min-h-[311px] xl:w-[528px] lg:w-[380px] lg:h-[380px] xl:h-[528px] rounded-[256px] overflow-hidden ${isReversed
            ? "shadow-[-20px_24px_33px_0px_rgba(255,138,55,0.25)]"
            : "shadow-[-20px_24px_33px_0px_rgba(119,55,255,0.25)]"
          }`}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={528}
            height={528}
            className="w-[311px] h-[311px] lg:w-[380px] lg:h-[380px] xl:w-full xl:h-full object-cover"
            style={{
              borderRadius: '256px',
              display: 'block'
            }}
          />
        </div>
        <div className="max-w-[311px] lg:max-w-[494px] max-h-[236px] flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[32px] ">
            <h2 className={`font-black text-[36px] ${isReversed ? "text-[#FF9900]" : "text-[#7737FF]"} leading-[100%] tracking-[-1%] lg:w-[520px]`}>
              {title}
            </h2>
            <p className="text-[24px] leading-[30px] text-[var(--textLightmode)] lg:w-[450px] font-normal tracking-[1%]">
              {description}
            </p>
          </div>
          <div className='flex justify-end flex hover:opacity-70 duration-300'>
            <Link href={linkUrl} className="flex items-center gap-4 mt-auto text-[#2140D4] font-bold tracking-[0%]">
              Learn More
              <Image
                src="/svg/Blue-go-forward.svg"
                alt="Go-forward-for-button"
                width={16}
                height={16}
                className="w-auto h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
