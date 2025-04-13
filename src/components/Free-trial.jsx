"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    { image: "/images/projectPicture.png", alt: "Slide 1" },
    { image: "/images/projectPicture.png", alt: "Slide 2" },
    { image: "/images/projectPicture.png", alt: "Slide 3" },
  ];

  const paginate = (newDirection) => {
    const nextIndex = (current + newDirection + slides.length) % slides.length;
    setDirection(newDirection);
    setCurrent(nextIndex);
    resetTimer();
  };

  const goToSlide = (index) => {
    if (index === current) return;
    const newDirection = index > current ? 1 : -1;
    setDirection(newDirection);
    setCurrent(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      paginate(1);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
  };

  const prevIndex = (current - 1 + slides.length) % slides.length;
  const nextIndex = (current + 1) % slides.length;

  return (
    <div className="py-[48px] pb-[24px] px-[32px] mt-7 md:mt-15 md:px-0 min-h-[415px] md:h-auto ">
      <div className="w-full min-w-[311px] md:max-w-[1110px] md:mx-auto flex flex-col gap-[20px] md:gap-[48px]">
        <div className="md:hidden h-[135.15px] flex flex-col gap-[10.15px]">
          <h2 className="text-[36px] leading-[100%] tracking-[-1%] font-black mb-2 drop-shadow-md">
            Risk-free 30 day trial to <br />level up your team's productivity.
          </h2>
          <p className="text-[24px] leading-[40px] leading-[-1%] font-normal drop-shadow-md">
            Get started now and take advantage of our 30 day free trial
            today. No credit card required.
          </p>
        </div>
        <div className="relative top-53 md:top-0 max-h-[432px] md:h-[432px] flex items-center md:justify-center gap-[4px] overflow-hidden rounded-[10px]">
          {/* Prev image */}
          <div
            onClick={() => goToSlide(prevIndex)}
            className="relative min-w-[19.83px] md:w-[137px] h-[302px] md:h-full opacity-50 cursor-pointer transition-transform"
          >
            <div className="absolute inset-0 bg-black/40 rounded-[20px] z-10" />
            <Image
              src={slides[prevIndex].image}
              alt={slides[prevIndex].alt}
              fill="true"
              sizes="(max-width: 768px) 20px, 137px"
              className="object-cover rounded-[20px]"
            />
          </div>

          {/* Main slide */}
          <div className="relative w-full md:w-[calc(100%-274px)] h-[302px] md:h-full md:mx-[10px] overflow-hidden rounded-[20px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <div className="relative w-full h-full">
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 rounded-[17.76px] md:rounded-[56px] z-10" />

                  {/* Image */}
                  <img
                    src={slides[current].image}
                    alt={slides[current].alt}
                    fill="true"
                    quality={100}
                    className="object-cover h-full w-full"
                  />

                  {/* Text content */}
                  <div className="hidden md:block absolute top-[118px] left-[63.5px] w-[689px] h-[196px] text-white flex flex-col gap-[32px] z-20">
                    <h2 className="text-[36px] leading-[100%] tracking-[-1%] font-black mb-2 drop-shadow-md">
                      Risk-free 30 day trial to <br />level up your team's productivity.
                    </h2>
                    <p className="text-[24px] leading-[40px] leading-[-1%] font-normal drop-shadow-md">
                      Get started now and take advantage of our 30 day free trial
                      today. No credit card required.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next image */}
          <div
            onClick={() => goToSlide(nextIndex)}
            className="relative min-w-[19.83px] md:w-[137px] h-[302px] md:h-full opacity-50 cursor-pointer transition-transform"
          >
            <div className="absolute inset-0 bg-black/40 rounded-[20px] z-10" />
            <Image
              src={slides[nextIndex].image}
              alt={slides[nextIndex].alt}
              fill="true"
              sizes="(max-width: 768px) 20px, 137px"
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-57 md:mt-0">
          {slides.map((_, index) => (
            <button
              aria-label="slides button to scroll images"
              key={index}
              onClick={() => goToSlide(index)}
              className={`md:h-1 h-2 w-9 rounded-full transition-all cursor-pointer duration-300 ${current === index
                ? "bg-[#2140D4]"
                : "bg-[#BED0FF]/50 hover:bg-[#2140D4]/30"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
