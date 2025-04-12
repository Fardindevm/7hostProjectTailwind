// app/api/currencies/[symbol]/route.js

export async function GET(req, context) {
  const { symbol } = context.params;

  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${symbol}`);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Coin not found' }), { status: 404 });
    }
    const data = await res.json();

    const simplified = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image.large,
      current_price: data.market_data.current_price.usd,
      last_updated: data.last_updated,
    };

    return new Response(JSON.stringify(simplified), { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
