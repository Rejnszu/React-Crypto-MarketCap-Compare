import React from "react";

import styles from "./CryptoDataCard.module.css";
const CryptoDataCard = (props) => {
  const imgSrc = props.icon + ".png";
  let cryptoIcon;
  try {
    cryptoIcon = require(`../../assets/images/${imgSrc}`).default;
  } catch (error) {
    if (error instanceof Error && error.code === "MODULE_NOT_FOUND") {
      cryptoIcon = require(`../../assets/images/blank.png`).default;
    } else throw error;
  }

  return (
    <div className={styles["card__crypto"]}>
      <img src={cryptoIcon} alt="img" className={styles["crypto__img"]} />
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
