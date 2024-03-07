import React from "react";
import styles from "./styles.module.css";
import Coingecko from "./components/Coingecko";
import Tradingview from "./components/Tradingview";

export default function Cryptocurrencies() {
  return (
    <div className={styles.outercontain}>
      <div className={styles.innercontain}>
        <Coingecko />
        <Tradingview />
      </div>
    </div>
  );
}
