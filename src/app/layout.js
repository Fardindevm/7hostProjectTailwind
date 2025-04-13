// app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";
import FooterComponent from "@/components/Footer";
import { ThemeProvider } from '../context/ThemeContext';
import { cookies } from 'next/headers';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "7currencies | Fardin Mohammadi",
  description: "Check live cryptocurrency prices and track your favorite digital currencies in real-time.",
  openGraph: {
    title: "7currencies | Fardin Mohammadi",
    description: "Check live cryptocurrency prices and track your favorite digital currencies in real-time.",
    siteName: '7currencies',
  },
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  const theme = cookies().get('theme')?.value || 'light';
  return (
    <html lang="en">
      <body className="bg-[var(--background)] ">
        <ThemeProvider initialTheme={theme}>
          <Navbar />
          <main className="pt-[56px] mx-auto">
            {children}
            <FooterComponent />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
