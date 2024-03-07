"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Coingecko = () => {
  const [btcPrice, setBtcPrice] = useState({
    usd: null,
    inr: null,
    usd_24h_change: null,
    inr_24h_change: null,
  });

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true",
        );
        const data = await response.json();

        // Extract BTC prices and 24-hour changes
        const { bitcoin } = data;
        const { usd, inr, usd_24h_change, inr_24h_change } = bitcoin;

        setBtcPrice({ usd, inr, usd_24h_change, inr_24h_change });
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchBtcPrice();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <Image src="/btc.svg" alt="btc logo" width={36} height={36} />
        <div className={styles.name}>Bitcoin</div>
        <div className={styles.symbol}>BTC</div>
        <div className={styles.rank}>Rank #1</div>
      </div>
      <div className={styles.pricecontain}>
        <div className={styles.btcprice}>
          <div className={styles.btcusd}>
            {" "}
            {btcPrice.usd && (
              <div>${btcPrice.usd.toFixed(2).toLocaleString()}</div>
            )}
          </div>
          <div className={styles.btcinr}>
            {" "}
            {btcPrice.inr && (
              <div>₹{btcPrice.inr.toFixed(2).toLocaleString()}</div>
            )}
          </div>
        </div>
        {btcPrice.usd_24h_change && (
          <div className={styles.containchange}>
            <div className={styles.btcchange}>
              <div className={styles.percentage}>
                <Image src="./Polygon.svg" height={8} width={11} />{" "}
                {btcPrice.usd_24h_change.toFixed(2)}%
              </div>{" "}
              <div className={styles.hr}>(24H)</div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.line}></div>
    </div>
  );
};

export default Coingecko;
