let isDcHero = true;
let isMarvelHero = false;
let isDcVillain = false;
let isMarvelVillain = false;

let dcHeroes = document.querySelector('.dcHeroes');
let dcVillains = document.querySelector('.dcVillains');
let marvelVillains = document.querySelector('.marvelVillains');
let marvelHeroes = document.querySelector('.marvelHeroes');

function logStatus(){
    console.log(`   DC Hero ${isDcHero}
    DC Villain ${isDcVillain}
    Marvel Hero ${isMarvelHero}
    Marvel Villain ${isMarvelVillain}`)
}

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
logoContainer.addEventListener('click', swapCharacters);


function swapCharacters(e){
    let dcLogo = document.querySelector('.dcLogo');
    let marvelLogo = document.querySelector('.marvelLogo');
    let figSpan = document.querySelector('.figSpan')

    if(isDcHero){
        // alert('DC HEROES');
        dcHeroes.classList.toggle('hide');
        marvelHeroes.classList.toggle('hide');
        isDcHero = false;
        isMarvelHero = true;
        logStatus();

    } else if(isDcVillain){
        // alert('DC VILLAINS');
        dcVillains.classList.toggle('hide');
        marvelVillains.classList.toggle('hide');
        isDcVillain = false;
        isMarvelVillain = true;
        logStatus();

    } else if(isMarvelHero){
        // alert('Marvel HEROES');
        marvelHeroes.classList.toggle('hide');
        dcHeroes.classList.toggle('hide');
        isMarvelHero = false;
        isDcHero = true;
        logStatus();

    } else if(isMarvelVillain){
        // alert('Marvel VILLAINS');

        marvelVillains.classList.toggle('hide');
        dcVillains.classList.toggle('hide');
        isMarvelVillain = false;
        isDcVillain = true;
        logStatus();
    }

    dcLogo.classList.toggle('hide')
    marvelLogo.classList.toggle('hide')
    // dcHeroes.classList.toggle('hide')
    // dcVillains.classList.toggle('hide')
    // marvelHeroes.classList.toggle('hide')

    // console.log(e.target)

    if(e.target.getAttribute('class') == 'dcLogo'){
        figSpan.textContent = 'DC';
    } else if (e.target.getAttribute('class') == 'marvelLogo'){
        figSpan.textContent = 'Marvel';
    }
    
}

let toggleDarkMode = document.querySelector('.toggleDarkMode');
toggleDarkMode.addEventListener('click', darkMode);

function darkMode(){
    // console.log(`DC STATUS ${isDcHero}`);
    // console.log(`mARVEL STATUS ${isMarvelHero}`);
    let lightMode = document.querySelector('.lightMode');
    let darkMode = document.querySelector('.darkMode');

    darkMode.classList.toggle('hide')
    lightMode.classList.toggle('hide')

    if(isDcHero){
        isDcHero = false;
        dcHeroes.classList.toggle('hide');
        dcVillains.classList.toggle('hide');
        isDcVillain = true;
        logStatus();

    } else if(isDcVillain){
        isDcVillain = false;
        dcHeroes.classList.toggle('hide');
        dcVillains.classList.toggle('hide');
        isDcHero = true;
        logStatus();

    } else if(isMarvelHero){
        isMarvelHero = false;
        marvelHeroes.classList.toggle('hide');
        marvelVillains.classList.toggle('hide');
        isMarvelVillain = true;
        logStatus();

    } else if(isMarvelVillain){
        isMarvelVillain = false;
        marvelVillains.classList.toggle('hide');
        marvelHeroes.classList.toggle('hide');
        isMarvelHero = true;
        logStatus();

    }

}



function main(){
//Make Rules appear
logStatus();
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