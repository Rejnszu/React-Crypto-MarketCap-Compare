import React, { useState } from "react";
import styles from "./CardContent.module.css";
import CryptoDataCard from "./CryptoDataCard";
import CryptoInput from "../Functionality/CryptoInput";
import CryptoComparison from "./CryptoComparison";
function CardContent(props) {
  const [firstCrypto, setFirstCrypto] = useState();
  const [secondCrypto, setSecondCrypto] = useState();

  function getFirstCryptoData(value) {
    setFirstCrypto(value);
  }
  function getSecondCryptoData(value) {
    setSecondCrypto(value);
  }
  return (
    <div className={styles.card}>
      <h1 className={styles["card__title"]}>Compare Crypto</h1>
      <CryptoInput
        firstCryptoData={getFirstCryptoData}
        secondCryptoData={getSecondCryptoData}
      />
      <div className={styles["card__wrapper"]}>
        <CryptoDataCard cryptoInformation={firstCrypto} />
        <CryptoDataCard cryptoInformation={secondCrypto} />
      </div>

      <CryptoComparison
        firstComparedCrypto={firstCrypto}
        secondComparedCrypto={secondCrypto}
      />
    </div>
  );
}

export default CardContent;
