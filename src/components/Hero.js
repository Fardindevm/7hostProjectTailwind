import { Public_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const publicSans = Public_Sans({
  weight: ["900"],
  subsets: ['latin'],
  variable: "--font-public-sans",
})

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-[24px] lg:mt-[56px] px-[32px] lg:px-[0px] min-w-[375px] lg:w-auto gap-[72px] py-[24px] lg:py-[48px] min-h-[724px] lg:min-h-[476px]">
      <div className="min-w-[311px] lg:w-[576px] flex flex-col gap-[64px]">
        <div className="min-w-[311px] flex flex-col gap-[32px]">
          <h1 className={`${publicSans.variable} text-[#2140D4] font-sans font-black lg:text-[48px] text-[36px] tracking-[-0.01em] leading-[1] lg:h-[168px] text-center`}>Manage your daily tasks better without all the stress.</h1>
          <p className='tracking-[-0.01em] leading-[30px] font-[400] text-[20px] lg:text-[24px] text-[#7E8186] text-center'>Change the way you manage your tasks with our revolutionary project management technology.</p>
        </div>
        <div className="flex flex-col md:w-[80%] md:mx-auto lg:flex-row gap-[12px] lg:gap-[24px]">
          <Link href="/" className='rounded-[32px] block max-w-[478px] lg:w-[223px] h-[56px] py-[16px] px-[32px] bg-[#08C056] group'>
            <button className="flex items-center justify-between min-w-[159px] cursor-pointer">
              <span className="group-hover:opacity-80 transition-opacity duration-300 text-[#F7FAFC] font-bold">Get Started</span>
              <Image src="/svg/Go-forward.svg" alt="Go-forward-for-button" width={16} height={16}
                className="group-hover:opacity-80 transition-opacity duration-300 w-auto h-auto"
              />
            </button>
          </Link>

          <Link href="/" className=' rounded-[32px] max-w-[478px] lg:w-[223px] h-[56px] py-[16px] px-[32px] border-2 border-[#BED0FF] hover:bg-[#BED0FF]/60 group duration-300'><button className={`${publicSans.variable} cursor-pointer max-w-[223px] min-w-[159px] font-bold text-[#2140D4] group-hover:text-[#2140D4]/70`}><span>Schedule a Demo</span></button></Link>
        </div>
      </div>
      <div>
        <Image src="/Images/Illustration.png" alt="Illustration" width="550" height="379" priority={true} className='relative left-[16.29px]' />
      </div>
    </div>
  )
}