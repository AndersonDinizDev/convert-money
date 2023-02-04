const button = document.getElementById(`convert-button`)
const select = document.getElementById('currency-select')

const dolar = 5.15 // Valor atual do dolar
const euro = 5.58 // Valor atual do euro

/* Nessa função é feita a conversão das moedas */
const convertValues = () => {

    const inputReal = document.getElementById(`input-real`).value
    const realValueText = document.getElementById(`real-value-text`)
    const currencyValueText = document.getElementById(`currency-value-text`)

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReal)

    if (select.value === 'US$ Dólar americano') {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReal / dolar)

    } else {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReal / euro)
    }

};

/* Essa função altera o texto e imagem das moedas */
const changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {

        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'

    } else {

        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/us.png'
    }

    convertValues()
};

button.addEventListener('click', convertValues) // Usando o addEventListener chamo a função convertValues ao clickar no botão

select.addEventListener('change', changeCurrency) //Usando o addEventListener chamo a função changeCurrency ao selecionar uma moeda