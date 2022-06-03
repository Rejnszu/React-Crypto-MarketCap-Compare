import styles from "./CardContent.module.css";
import CryptoDataCard from "./CryptoDataCard";
import CryptoInput from "../Functionality/CryptoInput";
import CryptoComparison from "./CryptoComparison";
import useCrypto from "../hooks/use-crypto";
function CardContent(props) {
  const {
    data: cryptoDataFirst,
    imgEndpoint: cryptoImgEndPointFirst,
    getData: getCryptoDataFirst,
    getIcon: getCryptoIconFirst,
  } = useCrypto();

  const {
    data: cryptoDataSecond,
    imgEndpoint: cryptoImgEndPointSecond,
    getData: getCryptoDataSecond,
    getIcon: getCryptoIconSecond,
  } = useCrypto();

  return (
    <div className={styles.card}>
      <h1 className={styles["card__title"]}>Compare Crypto</h1>
      <CryptoInput
        firstCryptoData={getCryptoDataFirst}
        secondCryptoData={getCryptoDataSecond}
        iconOne={getCryptoIconFirst}
        iconTwo={getCryptoIconSecond}
      />
      <div className={styles["card__wrapper"]}>
        <CryptoDataCard
          cryptoInformation={cryptoDataFirst}
          icon={cryptoImgEndPointFirst}
        />
        <CryptoDataCard
          cryptoInformation={cryptoDataSecond}
          icon={cryptoImgEndPointSecond}
        />
      </div>

      <CryptoComparison
        firstComparedCrypto={cryptoDataFirst}
        secondComparedCrypto={cryptoDataSecond}
      />
    </div>
  );
}

export default CardContent;
