import { useState } from "react";

const useCrypto = () => {
  const [cryptoData, setCryptoData] = useState();
  const [cryptoImgEndPoint, setCryptoImgEndpoint] = useState("btc");
  function getCryptoData(value) {
    setCryptoData(value);
  }
  function getCryptoIcon(icon) {
    setCryptoImgEndpoint(icon);
  }
  return {
    data: cryptoData,
    imgEndpoint: cryptoImgEndPoint,
    getData: getCryptoData,
    getIcon: getCryptoIcon,
  };
};

export default useCrypto;
