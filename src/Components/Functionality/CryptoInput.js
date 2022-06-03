import React, { useState, useEffect } from "react";

import styles from "./CryptoInput.module.css";
function CryptoInput(props) {
  const [cryptoList, setCryptoList] = useState();

  function fetchCryptoData() {
    return fetch("https://api.coinlore.net/api/tickers/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setCryptoList(data))
      .catch((error) => {
        alert(error.message);
      });
  }
  useEffect(() => {
    fetchCryptoData();
  }, []);

  function giveIcon(event, func) {
    func(event.target.value.toLowerCase());
  }
  function addCrypto(event, func) {
    func(cryptoList?.data[event.target.selectedIndex]);
  }

  return (
    <div className={styles.information}>
      <div>
        <label htmlFor="firstCrypto">Select first cryptocurrency:</label>
        <select
          id="firstCrypto"
          onChange={(e) => {
            addCrypto(e, props.firstCryptoData);
            giveIcon(e, props.iconOne);
          }}
        >
          {cryptoList?.data.map((data) => {
            return <option key={data.id}>{data.symbol}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="secondCrypto">Select second cryptocurrency:</label>
        <select
          id="secondCrypto"
          onChange={(e) => {
            addCrypto(e, props.secondCryptoData);
            giveIcon(e, props.iconTwo);
          }}
        >
          {cryptoList?.data.map((data) => {
            return <option key={data.id}>{data.symbol}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
export default CryptoInput;
