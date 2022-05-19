import React from "react";
import styles from "./CryptoCard.module.css";

function CryptoCard(props) {
  return (
    <div className={`${styles["crypto-card"]} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default CryptoCard;
