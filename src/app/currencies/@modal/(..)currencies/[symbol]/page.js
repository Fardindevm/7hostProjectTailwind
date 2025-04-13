
//app/currencies/@modal/(..)currencies/[symbol]/page.js
import CoinModalClient from "../../../Components/CoinModalClient";

export default async function CurrencyModal({ params }) {
  const { symbol } = params;

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      { next: { revalidate: 60 } } // optional cache
    );

    if (!res.ok) {
      throw new Error("ارز مورد نظر یافت نشد");
    }

    const data = await res.json();

    const formattedData = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image.large,
      current_price: data.market_data.current_price.usd,
      last_updated: data.last_updated,
    };

    return <CoinModalClient coin={formattedData} />;
  } catch (error) {
    return (
      <CoinModalClient error="خطا در دریافت اطلاعات یا ارز یافت نشد" />
    );
  }
}
