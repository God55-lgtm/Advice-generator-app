let advice = document.querySelector('.advice-text');
let numberAdvice = document.querySelector('.number');
const buttonChangeAdvice = document.querySelector('.img-button');



async function fetchData() {
    const apiUrlRandom = 'https://api.adviceslip.com/advice';
    // const apiUrlId = `https://api.adviceslip.com/advice/${slip.id}`
    try {
        const response = await fetch(apiUrlRandom);
        if (!response.ok) {
            throw new Error('No se ha encontrado la url')
        }
        const data = await response.json()
        const { slip } = data
        advice.textContent = `"${slip.advice}"`
        numberAdvice.textContent = `${slip.id}`


        console.log(slip.advice);

    } catch (error) {
        console.log('Error', error);

    }
}

fetchData()


buttonChangeAdvice.addEventListener('click',()=>{
    fetchData()
})
