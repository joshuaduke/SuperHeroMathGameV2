let userName = document.getElementById(`userName`);
let modalErrorMsg = document.querySelector(`.errorMsg`);
let playBtn = document.querySelector(`.playBtn`);
let detailsModal = document.querySelector(`.userDetailsModal`);
let resultsModal = document.querySelector('.resultsModalContainer');
let displayCurrentLevel = document.querySelector('.currentLevel')
let answersArr = [];
let score = 0;
let scoreContainer = document.querySelector(`.score`);
let misses = 0;
let missContainer = document.querySelector(`.miss`);
let time = 0;
let count = 0;
let localName = "";
let localHighScore = 0;
let storeLocal = window.localStorage;
let resetTimer = false;


if(localStorage.length == 1){
    window.localStorage.setItem('name', localName)
    window.localStorage.setItem('highscore', localHighScore)
}

if(localStorage.getItem('mode') == 'dark'){
    let body = document.querySelector('body');
    let gameContainer = document.querySelector('.gameContainer');
    let result = document.querySelectorAll('.result');

    body.classList.add('darkenBackground');
    gameContainer.style.background = '#0B1318';
    result.forEach(item => {
        item.style.color = "#fff"
    })

}

console.log(storeLocal);


// If username is valid run application
//remove if statement if not using results page
if(playBtn){

    playBtn.addEventListener("click", () => {
        if(userName.value == ""){
            
            modalErrorMsg.innerHTML = "Please Enter a User Name"
        } else {
            detailsModal.style.display = "none";
            playLevelOne();
            
        }
        
    })
}


function getRandomNum(num){
    return Math.floor(Math.random() * num) + 1 ;
}

function createEquation(operator){
    let firstNum;
    let secondNum;
    let equationBox = document.querySelector(`.equation`);
    let eqResult;

    switch(operator){
        case '+':
            firstNum = getRandomNum(25);
            secondNum = getRandomNum(25);
            equationBox.innerHTML = `${firstNum} + ${secondNum}`;
            return eqResult = firstNum + secondNum;

        case '-':
            firstNum = getRandomNum(25);
            secondNum = getRandomNum(25);
            let max = Math.max(firstNum, secondNum);
            let min = Math.min(firstNum, secondNum);

            equationBox.innerHTML = `${max} - ${min}`;
            return eqResult = max - min;
        
        case '*':
            firstNum = getRandomNum(12);
            secondNum = getRandomNum(12);
            equationBox.innerHTML = `${firstNum} * ${secondNum}`;
            return eqResult = firstNum * secondNum;

        case '/':
            firstNum = getRandomNum(12);
            secondNum = getRandomNum(12);
            console.log(`Division Firstnum ${firstNum}, secondnum ${secondNum}`);
            
            while(firstNum % secondNum !== 0){
                console.log('inside loop')
                firstNum = getRandomNum(50);
                secondNum = getRandomNum(50);
            }

            console.log(`2. Division Firstnum ${firstNum}, secondnum ${secondNum}`);

            equationBox.innerHTML = `${firstNum} / ${secondNum}`;
            return eqResult = firstNum / secondNum;

    }
}

//grey out screen and 3 second countdown before game starts
//3-2-1 countdown in center page
function runCountdown(time, currentlevel){
    let counter = document.querySelector(`.countdown`);
    let counterContainer = document.querySelector(`.countdownContainer`);
    let timeleft = 3;

    counterContainer.style.display = "block";
    counter.innerHTML = `Level ${currentlevel}`;

    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            counter.innerHTML = `Level ${currentlevel}`;
            console.log(`LEVEL ${currentlevel}`)
            counterContainer.style.display = "none";
            timer(time, currentlevel);
        } else {
            counter.innerHTML = timeleft;
        }

        timeleft -= 1;
    }, 1000);
    
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

    console.log(`Length: ${resultOptions.length}`)

    return resultOptions;
}

function reload(operator){
    let heroLogosValue =  document.querySelectorAll(`.result`);
    let heroLogos =  document.querySelectorAll(`.heroLogo`);
    answersArr = [];
    result = createEquation(operator);
    
    logoPosition()
    
    //hero values
    answersArr = generateAnswers(result)
    console.log(`Answers Arr ${answersArr}`)

    heroLogos.forEach(element => {
        element.style.display = "block"
    })

    //for each hero logo assign a value to it
    for (let i = 0; i < answersArr.length; i++) {
        for (let i = 0; i < heroLogosValue.length; i++) {
        heroLogosValue[i].innerHTML = answersArr[i];
        }
    }

    console.log(`RESULT FUNCTION: ${result}`)
    return result;
}

function clearGame(){
    let equationBox = document.querySelector(`.equation`);
    equationBox.textContent = "";

    answersArr = [];
    result = ""; 

    let heroLogosValue =  document.querySelectorAll(`.result`);
    let heroLogos =  document.querySelectorAll(`.heroLogo`);

    heroLogos.forEach(element => {
        element.style.display = "none"
    })

    heroLogosValue.forEach(element => {
        element.textContent = ""
    })

    resetTimer = true;
}

function playLevelOne(){
    runCountdown(15, 1);

    answersArr = [];
    displayCurrentLevel.textContent = '1';
    selectAnwser('+');
}

function playLevelTwo(){
    runCountdown(15, 2)
    answersArr = [];
    displayCurrentLevel.textContent = '2';
    selectAnwser('-');
}

function playLevelThree(){
    runCountdown(15, 3);
    answersArr = [];
    displayCurrentLevel.textContent = '3';
    selectAnwser('*');
}

function playLevelFour(){
    runCountdown(15, 4);
    answersArr = [];
    displayCurrentLevel.textContent = '4';
    selectAnwser('/');
}

function displayResults(){
    let finalScore = document.querySelector('.finalScore');
    let finalMisses = document.querySelector('.finalMisses')
    let userDetails = document.querySelector('.userDetails');
    let highScoreName = document.querySelector('.highScoreName');
    let highScoreNum = document.querySelector('.highScoreNum');
    let newHighscore = document.querySelector('.newHighscore');


    finalScore.innerHTML = score;
    userDetails.innerHTML = userName.value;
    finalMisses.innerHTML = misses;
    highScoreName.innerHTML =  storeLocal.getItem('name');
    highScoreNum.innerHTML = storeLocal.getItem('highscore');   
    resultsModal.style.display = 'block'


    console.log(`Final Score: ${score}, High Score: ${storeLocal.getItem('highscore')}`)
    if(score > storeLocal.getItem('highscore') && storeLocal.getItem('highscore') !== null){
        newHighscore.style.display = "block"
        window.localStorage.setItem('name', userName.value)
        window.localStorage.setItem('highscore', score)
        console.log(localStorage)
    } 
}

function selectAnwser(operator){
    let result = reload(operator);
    answersArr = [];
    console.log(`Select Answer result ${result}`);
    let value;
    let heroLogos =  document.querySelectorAll(`.heroLogo`);



    console.log(`Hero logo Length: ${heroLogos.length}`)

    heroLogos.forEach((element) => {

        element.onclick = function(){
            count++;
            console.log(`Count ${count}`)

            // //retrieve the child class result from heroLogo
            value = parseInt(element.querySelector('.result').innerHTML)
            console.log(`SELECT ANSWER VALUE ${value}`)
            console.log(`Value ${value} Result ${result}`)


            //verify chosen answer
            //if correct generate new equation
            // if not correct make option disappear
            if(value == result){
                console.log("Correct answer")
                score++;
                scoreContainer.innerHTML = score;
                resetTimer = true;
                result = reload(operator);
            } else {
                console.log(`${value} is the wrong answer, the correct answer is ${result}`);
                misses++;
                missContainer.innerHTML = misses;
                element.style.display = "none";
                if(score > 0){
                    score--; 
                    scoreContainer.innerHTML = score;
                }
            }
        }
    });
}

function logoPosition(){

    let heroLogos =  document.querySelectorAll(`.heroLogo`);
    let gameContainer = document.querySelector(`.gameContainer`);
    let top = gameContainer.offsetHeight - 110;
    let left = gameContainer.offsetWidth - 220;

    heroLogos.forEach(element => {
        element.style.display = "block"
        element.style.top = getRandomNum(top) + 'px';
        element.style.left = getRandomNum(left) + 'px';
    });
    
    let positionTimer = setInterval( ()=>{
        if(resetTimer){
            clearInterval(positionTimer)
            resetTimer = false;
        } else {
            heroLogos.forEach(element => {
                element.style.top = getRandomNum(top) + 'px';
                element.style.left = getRandomNum(left) + 'px';
            });
        }
        
    }, 3000)
    
}


function timer(time, level){
    //Level Timer
    let timer = document.querySelector(`.timer`);

    //once timer is completed go to the next level
    let timeleft = time;
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            timer.innerHTML = "-";

            console.clear()
            clearGame();
            
            if(level === 1){
                
                return playLevelTwo();
            } else if(level === 2){
                return playLevelThree();
            } else if(level === 3){
                return playLevelFour();
            } else if (level === 4){
                return displayResults();
            }
            
            
        } else {
            timer.innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}
