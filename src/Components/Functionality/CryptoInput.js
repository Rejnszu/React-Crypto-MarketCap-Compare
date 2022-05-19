import React, { useState, useEffect } from "react";

import styles from "./CryptoInput.module.css";
function CryptoInput(props) {
  const [cryptoList, setCryptoList] = useState();
  const [helper, setHelper] = useState();

  function fetchCryptoData() {
    return fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => response.json())
      .then((data) => setCryptoList(data));
  }
  useEffect(() => {
    fetchCryptoData();
  }, [helper]);

  function addFirstCrypto(e) {
    props.firstCryptoData(cryptoList?.data[e.target.selectedIndex]);
    setHelper(Math.random());
  }
  function addSecondCrypto(e) {
    props.secondCryptoData(cryptoList?.data[e.target.selectedIndex]);
    setHelper(Math.random());
  }
  return (
    <div className={styles.information}>
      <div>
        <label htmlFor="firstCrypto">Select first cryptocurrency:</label>
        <select id="firstCrypto" onChange={addFirstCrypto}>
          {cryptoList?.data.map((data) => {
            return <option key={data.id}>{data.symbol}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="secondCrypto">Select second cryptocurrency:</label>
        <select id="secondCrypto" onChange={addSecondCrypto}>
          {cryptoList?.data.map((data) => {
            return <option key={data.id}>{data.symbol}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
export default CryptoInput;
