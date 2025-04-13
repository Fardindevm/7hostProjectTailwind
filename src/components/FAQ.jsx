"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; 

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "sed do eiusmod tempor incididunt ut labore et dolore?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="py-[48px] min-w-[375px] min-h-[808px] lg:min-h-auto flex gap-10 ">
      <div className="bg-[var(--FAQbgLightmode)] py-[48px] px-[14px] lg:py-[56px] lg:px-[57px] min-w-[375px] lg:w-[1100px] min-h-[712px] 
      lg:min-h-[528px] lg:rounded-[56px] mx-auto flex flex-col gap-[22px]">
        <h1 className="font-black text-[32px] text-[var(--FAQTitleLightmode)] text-center">FAQ</h1>
        <p className="font-[500] text-[18px] leading-[130%] text-center min-w-[347px] xl:w-[988px] tracking-[0%] text-[var(--textLightmode)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        
        <section className="space-y-4 scroll-mt-[275px]" id="faq">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-[var(--FAQborder)] pb-[8px] py-[16px] "
            >
              <button
                aria-label="open and close question"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left font-medium text-[#4B4B4B] text-lg px-[8px]"
              >
                <span className="text-[16px] text-[var(--FAQTitleLightmode)] font-[500] tracking-[0%] ">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--FAQTitleDarkmode)]"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="font-[300] min-w-[347px] px-[8px] text-[18px] leading-[130%] tracking-[0%] text-[var(--FAQLightmode)]">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
