import CurrencyPageClient from '../Components/CurrencyPageClient';

async function getCoinData(symbol) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("ارز مورد نظر یافت نشد");
    }
    const data = await res.json();
    return {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image.large,
      current_price: data.market_data.current_price.usd,
      last_updated: data.last_updated,
    };
  } catch (error) {
    throw new Error("خطا در دریافت اطلاعات");
  }
}

export default async function Page({ params }) {
  try {
    const coinData = await getCoinData(params.symbol);
    return <CurrencyPageClient initialData={coinData} />;
  } catch (error) {
    return <CurrencyPageClient error={error.message} />;
  }
}