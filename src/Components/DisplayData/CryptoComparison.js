import React from "react";
import styles from "./CryptoComparison.module.css";

const CryptoComparison = (props) => {
  return (
    <div className={styles["card__comparison"]}>
      <p>
        If the market cap of{" "}
        <span> {props.firstComparedCrypto?.name ?? "CUR1"}</span> was at the
        market cap of <span> {props.secondComparedCrypto?.name ?? "CUR2"}</span>
        , its price will be
        <span>
          {props.secondComparedCrypto
            ? +props.secondComparedCrypto?.market_cap_usd /
              +props.firstComparedCrypto?.market_cap_usd
            : "0"}
        </span>{" "}
        times{" "}
        {+props.secondComparedCrypto?.market_cap_usd >
        +props.firstComparedCrypto?.market_cap_usd
          ? "bigger"
          : "smaller"}
        : meaning
        <span>
          {props.secondComparedCrypto
            ? (+props.secondComparedCrypto?.market_cap_usd /
                +props.firstComparedCrypto?.market_cap_usd) *
              +props.firstComparedCrypto?.price_usd
            : "0"}
        </span>{" "}
        USD.
      </p>
    </div>
  );
};

export default CryptoComparison;
