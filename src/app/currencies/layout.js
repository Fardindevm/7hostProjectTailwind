export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "Currency Details | 7currencies",
  description: "Get detailed information about cryptocurrency prices, market cap, volume, and price changes.",
  openGraph: {
    title: "Currency Details | 7currencies",
    description: "Get detailed information about cryptocurrency prices, market cap, volume, and price changes.",
  },
};

export default function Layout({ children, modal }) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
