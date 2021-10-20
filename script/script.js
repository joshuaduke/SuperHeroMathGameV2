
function generateAnswers(result){
    let heroLogosValue =  document.querySelectorAll(`.result`);

    //create an array to store values for each hero logo
    let resultOptions = [];

    //loop through array to see if any value is equal to the result
    // if it is assign new value
    for(i = 0; i < heroLogosValue.length; i++){
        let option;

        do {
            option = getRandomNum(25);
            resultOptions.push(option);
        } while(option == result);
    }

    //choose a random element from the array and assign the result to it
    let resultOptionsPosition = getRandomNum(resultOptions.length - 1) 
    resultOptions[resultOptionsPosition] = result;

    console.log(resultOptions[resultOptionsPosition]);

    resultOptions.forEach(element => {
        console.log(`${element}`);
    })

}

let logoContainer = document.querySelector('.navLogo');
logoContainer.addEventListener('click', displayMarvel)


function displayMarvel(){

    let dcLogo = document.querySelector('.dcLogo');
    let marvelLogo = document.querySelector('.marvelLogo');
    let dcHeroes = document.querySelector('.dcHeroes')
    let marvelHeroes = document.querySelector('.marvelHeroes')

    dcLogo.classList.toggle('hide')
    marvelLogo.classList.toggle('hide')
    dcHeroes.classList.toggle('hide')
    marvelHeroes.classList.toggle('hide')
    // alert('hello');

}



function main(){
//Make Rules appear

    let rulesBtn = document.querySelector(`.rules`);
    let rulesModal = document.querySelector(`.gameRules`)

    rulesBtn.addEventListener("click", () => {
        rulesModal.style.visibility = "visible"
    })

    //close rules

    let close = document.querySelector(`.close`)

    close.addEventListener("click", ()=>{
        rulesModal.style.visibility = "hidden";
    })

    // Exit modal when user clicks anywhere outisde of it.
    window.onclick = (e) => {
        if(e.target == rulesModal) {
            rulesModal.style.visibility = "hidden";
        }
    }
}

main();