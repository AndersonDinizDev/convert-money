const button = document.getElementById(`convert-button`);
const select = document.getElementById("currency-select");

/* Nessa função é feita a conversão das moedas */
const convertValues = async () => {
  const inputReal = document.getElementById(`input-real`).value;
  const realValueText = document.getElementById(`real-value-text`);
  const currencyValueText = document.getElementById(`currency-value-text`);

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dolar = data.USDBRL.high; // Valor atual do dolar em reais
  const euro = data.EURBRL.high; // Valor atual do euro em reais
  const bitcoin = data.BTCBRL.high; // Valor atual do bitcoin em reais

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }
  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }
  if (select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputReal / bitcoin);
  }
};

/* Essa função altera o texto e imagem das moedas */
const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }
  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/us.png";
  }
  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }

  convertValues();
};

button.addEventListener("click", convertValues); // Usando o addEventListener chamo a função convertValues ao clickar no botão

select.addEventListener("change", changeCurrency); //Usando o addEventListener chamo a função changeCurrency ao selecionar uma moeda
