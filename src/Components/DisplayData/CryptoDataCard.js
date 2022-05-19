import React from "react";
import styles from "./CryptoDataCard.module.css";
const CryptoDataCard = (props) => {
  return (
    <div className={styles["card__crypto"]}>
      <img className={styles["crypto__img"]} />
      <p className={(styles["crypto__name"], styles["crypto__text"])}>
        Name: {props.cryptoInformation?.name}
      </p>
      <p className={(styles["crypto__symbol"], styles["crypto__text"])}>
        Symbol: {props.cryptoInformation?.symbol}
      </p>
      <p className={(styles["crypto__price"], styles["crypto__text"])}>
        Price: {props.cryptoInformation?.price_usd}
      </p>
      <p className={(styles["crypto__market-cap"], styles["crypto__text"])}>
        Market cap: {props.cryptoInformation?.market_cap_usd}
      </p>
    </div>
  );
};

export default CryptoDataCard;
