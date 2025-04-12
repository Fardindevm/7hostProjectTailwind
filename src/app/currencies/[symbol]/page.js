// app/currencies/[symbol]/page.js
"use client";

import { useCurrencyContext } from "@/app/context/CurrencyContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CurrencyPage({ params }) {
  const { symbol } = params;  // Fix: use React.use() here
  const { getCoin, saveCoin } = useCurrencyContext();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const cached = getCoin(symbol);
        if (cached) {
          setCoin(cached);
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );

        if (res.ok) {
          const data = await res.json();
          const formattedData = {
            id: data.id,
            symbol: data.symbol,
            name: data.name,
            image: data.image.large,
            current_price: data.market_data.current_price.usd,
            last_updated: data.last_updated
          };

          saveCoin(symbol, formattedData);
          setCoin(formattedData);
        } else {
          setError("ارز مورد نظر یافت نشد");
        }
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [symbol, getCoin, saveCoin]);

  if (loading) return <div className="h-screen flex justify-center items-center">در حال بارگذاری...</div>;
  if (error || !coin) return <div className="h-screen flex justify-center items-center text-red-500">{error}</div>;

  const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(coin.last_updated))
  .replace(/[۰-۹]/g, d => d.charCodeAt(0) - '۰'.charCodeAt(0));

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative md:w-[752px] w-[420px] md:h-[284px] bg-[#F5F6FA] rounded-2xl p-6 shadow-md">
        {/* Back Button */}
        <Link 
          href="/currencies" 
          className="absolute top-7 right-5"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-300 text-blue-500 hover:bg-blue-100 transition">
            ×
          </div>
        </Link>

        {/* Brand */}
        <div className="text-[24px] font-[800] leading-[34px] md:h-[72px] text-left text-black mb-4">
          <span className="text-[#00A86B]">7</span>
          <span className="text-blue-600">currencies.</span>
        </div>

        {/* Coin info */}
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

        {/* Price */}
        <div className="text-[25px] md:text-[40px] leading-[48px] px-3 font-bold mb-2">
          {coin.current_price.toFixed(2)} <span className="text-[#58BD7D]">USD</span>
        </div>
      </div>
    </div>
  );
}
