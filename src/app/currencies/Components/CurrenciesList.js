// app/currencies/Components/CurrenciesList.jsx
"use client"

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Timer } from 'lucide-react'

export default function CurrenciesList({ initialData }) {
  const [currencies, setCurrencies] = useState(initialData)
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [cooldown, setCooldown] = useState(0)
  const observerRef = useRef()

  const fetchMore = async () => {
    if (loading || cooldown > 0) return;
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 500));
      const res = await axios.get(`/api/currencies?page=${page}`);

      if (res.data.length === 0) {
        setHasMore(false);
      } else {
        const existingIds = new Set(currencies.map(coin => coin.id));
        const uniqueNewCoins = res.data.filter(coin => !existingIds.has(coin.id));

        if (uniqueNewCoins.length > 0) {
          setCurrencies(prev => [...prev, ...uniqueNewCoins]);
          setPage(prev => prev + 1);
        } else {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error('خطا در دریافت اطلاعات:', err);
      startCooldown();
    }

    setLoading(false);
  }

  function convertToPersianDate(dateStr) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('fa-IR')
      .format(date)
      .replace(/[۰-۹]/g, d => String(d.charCodeAt(0) - '۰'.charCodeAt(0)));
  }

  const startCooldown = () => {
    setCooldown(60)
  }

  useEffect(() => {
    let timer
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => {
          if (prev <= 1) clearInterval(timer)
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [cooldown])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && page <= 4 && cooldown === 0) {
          fetchMore()
        }
      },
      { threshold: 1 }
    )
    if (observerRef.current) observer.observe(observerRef.current)
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [hasMore, page, cooldown])

  return (
    <div className="pb-[24px] xl:py-[56px] px-[8px] xl:px-[40px] flex flex-col gap-[48px] xl:gap-[16px] xl:rounded-[20px] min-w-[375px] xl:w-[1096px] mx-auto bg-[#EDEDED] shadow mb-[32px] xl:my-[48px]">
      <table className="w-full text-right">
        <thead className='xl:w-[1016px] h-[40px]'>
          <tr className="text-[10px] xl:text-[12px] text-[#777E90]">
            <th>#</th>
            <th className='text-start pl-[12px] xl:pl-[115px]'>Name</th>
            <th className='text-start'>Price (USD)</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((coin, index) => (
            <tr key={coin.id} className="w-[1000px] h-[64px] hover:bg-gray-50 transition">
              <td className="font-[600] text-[#777E90] text-[10px] xl:text-[12px] leading-[20px]">{index + 1}</td>
              <td className="pl-[13px] xl:p-[12px] xl:pl-[113px] py-[20px] min-w-[187px] max-w-[187px] xl:max-w-[639px] flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-[23px] h-[24px] xl:w-[32px] xl:h-[32px]" />
                <Link
                  href={`/currencies/${coin.id}`}
                  scroll={false}
                  replace={true}      // Add this
                  className="text-[#23262F] hover:underline font-[500] text-start text-[12px] xl:text-[14px] leading-[24px]"
                >
                  {coin.name} <span className='text-[#777E90] font-bold text-[14px] leading-[24px]'>{coin.symbol.toUpperCase()}</span>
                </Link>

              </td>
              <td className="font-[500] text-[#23262F] text-[12px] text-start xl:text-[14px] leading-[24px]">${coin.current_price}</td>
              <td className="text-[12px] xl:text-[14px] leading-[24px] text-[#23262F]">{convertToPersianDate(coin.last_updated)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {page <= 4 && <div ref={observerRef} className="h-10" />}

      {page > 4 && (
        <div className="text-center xl:mt-6">
          <button
            aria-label='button for fetching more lists'
            onClick={fetchMore}
            disabled={loading || cooldown > 0 || !hasMore}
            className={`w-[190px] h-[44px] xl:w-[342px] xl:h-[56px] mx-auto px-[32px] py-[16px] rounded-full font-[700] text-[16px] flex items-center justify-center gap-2 transition ${loading || cooldown > 0 || !hasMore
              ? 'bg-[#9C9C9C] text-gray-200 cursor-not-allowed'
              : 'bg-[#2140D4] hover:bg-[#65BBE5] text-[#F7FAFC] cursor-pointer'
              }`}
          >
            {loading ? (
              'در حال بارگذاری...'
            ) : cooldown > 0 ? (
              <>
                <Timer className="w-5 h-5 animate-pulse" />
                {`لطفا ${cooldown} ثانیه صبر کنید`}
              </>
            ) : hasMore ? (
              'Show More'
            ) : (
              'پایان لیست ارزها'
            )}
          </button>
        </div>
      )}

      {loading && <p className="text-center text-sm text-gray-400 xl:mt-4">در حال بارگذاری...</p>}
      {cooldown > 0 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in-out z-50" dir="rtl">
          محدودیت API فعال است. لطفاً تا {cooldown} ثانیه دیگر صبر کنید.
        </div>

      )}
    </div>
  )
}

