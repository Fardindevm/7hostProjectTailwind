//app/api/currencies/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const page = searchParams.get("page") || "1"

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=${page}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch" }), {
      status: res.status,
    })
  }

  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
  })
}
