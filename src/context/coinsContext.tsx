"use client";

import { IChildren, ICoin } from "@/utils/types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface CoinsData {
  coinsData: ICoin[];
  getAllCoins: () => void;
}

const CoinsContext = createContext({} as CoinsData);

export function CoinsProvider({ children }: IChildren) {
  const [coinsData, setCoinsData] = useState<ICoin[]>([]);

  const getAllCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const data = response.data;
      setCoinsData(data);
    } catch (error) {
      console.error("Error fetching coins data:", error);
    }
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <CoinsContext.Provider value={{ coinsData, getAllCoins }}>
      {children}
    </CoinsContext.Provider>
  );
}

export function useCoinsContext() {
  return useContext(CoinsContext);
}
