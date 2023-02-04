const button = document.getElementById(`convert-button`)

const dolar = 5.2 // Valor atual do dolar


/* Nessa função é feita a conversão das moedas */
const convertValues = () => {

    const inputReal = document.getElementById(`input-real`).value
    const realValueText = document.getElementById(`real-value-text`)
    const currencyValueText = document.getElementById(`currency-value-text`)

    realValueText.innerHTML = inputReal
    currencyValueText.innerHTML = inputReal / dolar

}

button.addEventListener(`click`, convertValues)
