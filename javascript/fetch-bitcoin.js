export default function fetchBitcoin(url, target) {
  function setBTCValue(preco) {
    const bitcoinValue = document.querySelector(target);
    const doe1000Reais = 1000 / preco;
    bitcoinValue.innerText = `${doe1000Reais.toFixed(5).replace(".", ",")}`;
  }

  function bitcoinFetch() {
    fetch(url)
      .then((responseBitcoin) => responseBitcoin.json())
      .then((bitcoinJSON) => setBTCValue(bitcoinJSON.BRL.buy))
      .catch((error) => console.log(Error(error)));
  }

  return bitcoinFetch();
}
