// components/CoinModalClient.js
'use client';

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CoinModalClient({ coin, error }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (pathname.includes('@modal')) {
      router.back();
    } else {
      router.push('/currencies');
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  if (error) {
    return (
      <div className="fixed inset-0 z-50" onClick={handleBackdropClick}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-50 h-full flex items-center justify-center text-red-500">
          {error}
        </div>
      </div>
    );
  }

  const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(coin.last_updated))
    .replace(/[۰-۹]/g, d => d.charCodeAt(0) - '۰'.charCodeAt(0));

  return (
    <div className="fixed inset-0 z-50" onClick={handleBackdropClick}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-50 h-full flex items-center justify-center">
        <div 
          className="relative md:w-[752px] w-[420px] md:h-[284px] bg-[#F5F6FA] rounded-2xl p-6 shadow-md" 
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-7 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-blue-300 text-blue-500 hover:bg-blue-100 transition"
          >
            ×
          </button>

          <div className="text-[24px] font-[800] leading-[34px] md:h-[72px] text-left text-black mb-4">
            <span className="text-[#00A86B]">7</span>
            <span className="text-blue-600">currencies.</span>
          </div>

          <div className="flex items-center px-3 justify-between mb-[12px]">
            <div className="flex gap-[12px]">
              <img src={coin.image} alt={coin.name} width={56} height={56} />
              <div className="flex flex-row items-center gap-[4px]">
                <div className="text-lg font-semibold text-black">{coin.name}</div>
                <div className="text-[#777E90] font-[700] text-[24px]">{coin.symbol.toUpperCase()}</div>
              </div>
            </div>
            <div className="text-right text-[#888A8E]">
              {jalaliDate} Updated
            </div>
          </div>

          <div className="text-[25px] md:text-[40px] leading-[48px] px-3 font-bold mb-2">
            {coin.current_price.toFixed(2)} <span className="text-[#58BD7D]">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}