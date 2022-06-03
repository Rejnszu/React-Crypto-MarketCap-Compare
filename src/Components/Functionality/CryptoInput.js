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

  function giveIconOne(event) {
    props.iconOne(event.target.value.toLowerCase());
  }
  function giveIconTwo(event) {
    props.iconTwo(event.target.value.toLowerCase());
  }
  function addFirstCrypto(e) {
    props.firstCryptoData(cryptoList?.data[e.target.selectedIndex]);
  }
  function addSecondCrypto(e) {
    props.secondCryptoData(cryptoList?.data[e.target.selectedIndex]);
  }
  return (
    <div className={styles.information}>
      <div>
        <label htmlFor="firstCrypto">Select first cryptocurrency:</label>
        <select
          id="firstCrypto"
          onChange={(e) => {
            addFirstCrypto(e);
            giveIconOne(e);
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
            addSecondCrypto(e);
            giveIconTwo(e);
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
