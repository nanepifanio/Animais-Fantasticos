export default function initFetchBitcoin() {
  function fetchBitcoin() {
    fetch("https://blockchain.info/ticker")
      .then((responseBitcoin) => responseBitcoin.json())
      .then((bitcoinJSON) => setBTCValue(bitcoinJSON.BRL.buy))
      .catch((error) => console.log(Error(error)));
  }

  fetchBitcoin();

  function setBTCValue(preco) {
    const bitcoinValue = document.querySelector(".btc-preco");
    const doe1000Reais = 1000 / preco;
    bitcoinValue.innerText = `${doe1000Reais.toFixed(5).replace(".", ",")}`;
  }
}
