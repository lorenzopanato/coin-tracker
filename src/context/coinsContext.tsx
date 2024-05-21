"use client";

import { IChildren, ICoin } from "@/utils/types";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

interface CoinsData {
  coinsData: ICoin[];
  pageCoins: ICoin[];
  fetchAllCoins: () => void;
  fetchPageCoins: (page: number) => void;
}

const CoinsContext = createContext({} as CoinsData);

const apiBaseUrl = "https://api.coingecko.com/api/v3/coins/markets";

export function CoinsProvider({ children }: IChildren) {
  const [coinsData, setCoinsData] = useState<ICoin[]>([]);
  const [pageCoins, setPageCoins] = useState<ICoin[]>([]);

  const fetchAllCoins = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}?vs_currency=usd`);
      setCoinsData(response.data);
    } catch (error) {
      console.error("Error fetching all coins data:", error);
    }
  };

  const fetchPageCoins = async (page: number) => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}?vs_currency=usd&page=${page}&per_page=10`
      );
      setPageCoins(response.data);
    } catch (error) {
      console.error("Error fetching page coins data:", error);
    }
  };

  useEffect(() => {
    fetchAllCoins();
    fetchPageCoins(1);
  }, []);

  return (
    <CoinsContext.Provider
      value={{ coinsData, pageCoins, fetchAllCoins, fetchPageCoins }}
    >
      {children}
    </CoinsContext.Provider>
  );
}

export function useCoinsContext() {
  return useContext(CoinsContext);
}
