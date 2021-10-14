// retrieve user name value
let userName = document.getElementById(`userName`);
let modalErrorMsg = document.querySelector(`.errorMsg`);

//Details Modal
//display modal where user can enter name
let playBtn = document.querySelector(`.playBtn`);
let detailsModal = document.querySelector(`.userDetailsModal`);

let answersArr = [];
// let result;
let score = 0;
let scoreContainer = document.querySelector(`.score`);
let misses = 0;
let missContainer = document.querySelector(`.miss`);
// let level = 1;
let time = 0;
let count = 0;

// If username is valid run application
playBtn.addEventListener("click", () => {
    if(userName.value == ""){
        modalErrorMsg.innerHTML = "Please Enter a User Name"
    } else {
        detailsModal.style.display = "none";
        main()
    }
    
})

//Return a random number from 1 - sepcified
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
            while(firstNum % secondNum != 0){
                firstNum = getRandomNum();
                secondNum = getRandomNum();
            }


            equationBox.innerHTML = `${firstNum} / ${secondNum}`;
            return eqResult = firstNum / second;

    }
}

//grey out screen and 3 second countdown before game starts
//3-2-1 countdown in center page
function runCountdown(currentlevel){
    let counter = document.querySelector(`.countdown`);
    let counterContainer = document.querySelector(`.countdownContainer`);
    counterContainer.style.display = "block";
    counter.innerHTML = `Level ${currentlevel}`;
    let timeleft = 3;
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            counter.innerHTML = `Level ${currentlevel}`;
            console.log(`LEVEL ${currentlevel}`)
            counterContainer.style.display = "none";

            // switch (level) {
            //     case 1:
            //         console.log(`Playing Level ${currentlevel}`)
            //         playLevelOne();
            //         break;
            //     case 2:
            //         console.log(`Playing Level ${currentlevel}`)
            //         playLevelTwo();
            //         break;
            // }
            
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
    answersArr = [];
    //what needs to change
    //equation
    //result
    result = createEquation(operator);
    
    //generate random position
    logoPosition()
    
    //hero values
    answersArr = generateAnswers(result)
    console.log(`Answers Arr ${answersArr}`)
    //assign result to a logo
    let heroLogosValue =  document.querySelectorAll(`.result`);
    let heroLogos =  document.querySelectorAll(`.heroLogo`);

    heroLogos.forEach(element => {
        element.style.display = "block"
    })

    
    // console.log('Hero Values', heroLogos);

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
}

// Run level one
//This level will run for 30 seconds and will
// call the create equation function with the addition operator
function playLevelOne(){
    runCountdown(1);

    console.log("LEVEL1")
    answersArr = [];
    timer(10, 1);
    //level one = addition
    selectAnwser('+')
}

function playLevelTwo(){
    runCountdown(2)
    console.log("LEVEL2")
    answersArr = [];
    // timer(10, 2);
    selectAnwser('-')
}

function playLevelThree(){
    runCountdown(3)
    console.log("LEVEL3")
    answersArr = [];
    selectAnwser('*')
}

function selectAnwser(operator){
    let result = reload(operator);
    answersArr = [];
    console.log(`Select Answer result ${result}`);
    let value;
    let heroLogosValue =  document.querySelectorAll(`.result`);
    // let answersArr = [];
    
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

        // element.addEventListener('click', (e)=>{
        //     e.preventDefault();
        //     count++;
        //     console.log(`Count ${count}`)
        //     // //retrieve the child class result from heroLogo
        //     // value = parseInt(element.querySelector('.result').innerHTML)
        //     // console.log(e);
        //     // console.log(`SELECT ANSWER VALUE ${value}`)
        //     // console.log(`Value ${value} Result ${result}`)


        //     // //verify chosen answer
        //     // //if correct generate new equation
        //     // // if not correct make option disappear
        //     // if(value == result){
        //     //     console.log("Correct answer")
        //     //     score++;
        //     //     scoreContainer.innerHTML = score;

        //     //     result = reload(operator);
        //     // } else {
        //     //     console.log(`${value} is the wrong answer, the correct answer is ${result}`);
        //     //     misses++;
        //     //     missContainer.innerHTML = misses;
        //     //     element.style.display = "none";
        //     //     if(score > 0){
        //     //         score--; 
        //     //         scoreContainer.innerHTML = score;
        //     //     }
        //     // }
        // })
    });
}

function logoPosition(){
    let heroLogos =  document.querySelectorAll(`.heroLogo`);
    let gameContainer = document.querySelector(`.gameContainer`);
    let top = gameContainer.offsetHeight - 100;
    let left = gameContainer.offsetWidth - 115;

    console.log(gameContainer.offsetHeight);
    console.log(gameContainer.offsetWidth);
    heroLogos.forEach(element => {
        element.style.top = getRandomNum(top) + 'px';
        element.style.left = getRandomNum(left) + 'px';
    });
    
    // setInterval( ()=>{
    //     heroLogos.forEach(element => {
    //         element.style.top = getRandomNum(top) + 'px';
    //         element.style.left = getRandomNum(left) + 'px';
    //     });
    // }, 3000)
    
}

function timer(time, level){
    //Level Timer
    let timer = document.querySelector(`.timer`);

    //once timer is completed go to the next level
    let timeleft = time;
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            timer.innerHTML = "Go";

            console.clear()
            clearGame();
            
            if(level == 1){
                return playLevelTwo();
            } else if(level == 2){
                // return playLevelThree();
            }
            
            
        } else {
            timer.innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

function main(){
    //display equation and results on logos
    //game timer starts
    //images move independently
    //if correct answer display new equation
    //if answer not right add to misses
    //set clicked logo to hidden

    //when timer runs out
    //level 2 begins
    //equation and logos are updated
    //hidden logos are set to visible


    // createEquation('*');

    //level 1 starts
    playLevelOne();

    //level 2 starts
    // startLevelTwo();
}


// TODO

// Do not allow duplicate values on hero logos
//If overflow x then reload the hero logos
//fix level 2 bug, reload goes back to addition

//level 1 timer
//begin level 2

/*

class Level{
    constructor(level, timer, operator) {
        this.level = level;
        this.level = level;
        this.level = level;
    }

}



*/