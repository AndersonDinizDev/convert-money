const button = document.getElementById(`convert-button`)
const select1 = document.getElementById('currency-select-1')
const select2 = document.getElementById('currency-select-2')

const dolar = 5.15 // Valor atual do dolar
const euro = 5.58 // Valor atual do euro
const bitcoin = 120.742 // Valor atual do bitcoin 
const real = 0.19

/* Nessa função é feita a conversão das moedas */
const convertValues = () => {

    const inputValue = document.getElementById(`input-value`).value
    const realValueText = document.getElementById(`real-value-text`)
    const currencyValueText = document.getElementById(`currency-value-text`)
    
    if (select1.value === 'R$ Real Brasileiro' && select2.value === 'US$ Dólar americano' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue / dolar)
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(nputValue)

    } if (select1.value === 'R$ Real Brasileiro' && select2.value === '€ Euro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue / euro)
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

    } if (select1.value === 'R$ Real Brasileiro' && select2.value === '₿ Bitcoin' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue / bitcoin)
        realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue)

    } if (select1.value === 'US$ Dólar americano' && select2.value === 'R$ Real Brasileiro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue / real)
        realValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue)

    } if (select1.value === 'US$ Dólar americano' && select2.value === '€ Euro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue / euro)
        realValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue)

    } if (select1.value === 'US$ Dólar americano' && select2.value === '₿ Bitcoin' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue / bitcoin)
        realValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue)

    } if (select1.value === '€ Euro' && select2.value === 'R$ Real Brasileiro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue / real)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

    } if (select1.value === '€ Euro' && select2.value === 'US$ Dólar americano' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue / dolar)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

    } if (select1.value === '€ Euro' && select2.value === '₿ Bitcoin' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue / bitcoin)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue)

    } if (select1.value === '₿ Bitcoin' && select2.value === 'R$ Real Brasileiro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue / real)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue)

    } if (select1.value === '₿ Bitcoin' && select2.value === 'US$ Dólar americano' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputValue / dolar)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue)
        

    } if (select1.value === '₿ Bitcoin' && select2.value === '€ Euro' ) {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValue / euro)
        realValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputValue)

    } if (select1.value === 'R$ Real Brasileiro' && select2.value === 'R$ Real Brasileiro') {

        alert('Favor não selecione moedas iguais!')
        location.reload()

    } if (select1.value === 'US$ Dólar americano' && select2.value === 'US$ Dólar americano') {

        alert('Favor não selecione moedas iguais!')
        location.reload()

    } if (select1.value === '€ Euro' && select2.value === '€ Euro') {

        alert('Favor não selecione moedas iguais!')
        location.reload()

    } if (select1.value === '₿ Bitcoin' && select2.value === '₿ Bitcoin') {

        alert('Favor não selecione moedas iguais!')
        location.reload()

    }
};

/* Essa função altera o texto e imagem das moedas */
const changeCurrency = () => {

    const currencyName1 = document.getElementById('currency-name-1')
    const currencyName2 = document.getElementById('currency-name-2')
    const currencyImg1 = document.getElementById('currency-img-1')
    const currencyImg2 = document.getElementById('currency-img-2')

    if (select1.value === 'R$ Real Brasileiro') {

        currencyName1.innerHTML = 'Real'
        currencyImg1.src = './assets/brasil.png'

    } if (select1.value === '€ Euro') {

        currencyName1.innerHTML = 'Euro'
        currencyImg1.src = './assets/euro.png'

    } if (select1.value === 'US$ Dólar americano') {

        currencyName1.innerHTML = 'Dólar americano'
        currencyImg1.src = './assets/us.png'

    } if (select1.value === '₿ Bitcoin') {

        currencyName1.innerHTML = 'Bitcoin'
        currencyImg1.src = './assets/bitcoin.png'
    
    } if (select2.value === 'R$ Real Brasileiro') {

        currencyName2.innerHTML = 'Real'
        currencyImg2.src = './assets/brasil.png'

    } if (select2.value === '€ Euro') {

        currencyName2.innerHTML = 'Euro'
        currencyImg2.src = './assets/euro.png'

    } if (select2.value === 'US$ Dólar americano') {

        currencyName2.innerHTML = 'Dólar americano'
        currencyImg2.src = './assets/us.png'

    } if (select2.value === '₿ Bitcoin') {

        currencyName2.innerHTML = 'Bitcoin'
        currencyImg2.src = './assets/bitcoin.png'
    }

    convertValues()
};

button.addEventListener('click', convertValues) // Usando o addEventListener chamo a função convertValues ao clickar no botão

select1.addEventListener('change', changeCurrency) //Usando o addEventListener chamo a função changeCurrency ao selecionar uma moeda
select2.addEventListener('change', changeCurrency) //Usando o addEventListener chamo a função changeCurrency ao selecionar uma moeda