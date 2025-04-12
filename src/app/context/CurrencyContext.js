"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [coins, setCoins] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("coins");
    if (saved) {
      setCoins(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("coins", JSON.stringify(coins));
  }, [coins]);

  const saveCoin = (symbol, data) => {
    setCoins((prev) => ({
      ...prev,
      [symbol]: data,
    }));
  };

  const getCoin = (symbol) => coins[symbol];

  return (
    <CurrencyContext.Provider value={{ getCoin, saveCoin }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyContext() {
  return useContext(CurrencyContext);
}
