//app/currencies/page.js
import CurrenciesHeader from "@/app/currencies/Components/CurrenciesHeader";
import CurrenciesList from "./Components/CurrenciesList";

async function getCurrencies() {
  try {const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;per_page=10&amp;page=1", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch initial data");
  return res.json();
} catch (error) {
  console.log("Can not get price");
}
}

export default async function Currencies() {
  const initialData = await getCurrencies();

  return (
    <div>
      <CurrenciesHeader />
      <CurrenciesList initialData={initialData} />
    </div>
  );
}
