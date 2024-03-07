import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image src="/logo.svg" alt="koinx Logo" width={96} height={72} priority />
      <div className={styles.links}>
        <a href="#">Crypto Taxes</a>
        <a href="#">Free Tools</a>
        <a href="#">Resource Center</a>
        <button>Get Started</button>
      </div>
    </div>
  );
}
