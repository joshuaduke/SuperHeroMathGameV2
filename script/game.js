// retrieve user name value
let userName = document.getElementById(`userName`);
let modalErrorMsg = document.querySelector(`.errorMsg`);

//Details Modal
//display modal where user can enter name
let playBtn = document.querySelector(`.playBtn`);
let detailsModal = document.querySelector(`.userDetailsModal`);

// playBtn.addEventListener("click", () => {
//     if(userName.value == ""){
//         modalErrorMsg.innerHTML = "Please Enter a User Name"
//     } else {
//         detailsModal.style.display = "none";
//         runCountdown();
//     }
    
// })

//Return a random number from 1 - 12
function getRandomNum(num){
    return Math.floor(Math.random() * num) + 1 ;
}


function createEquation(operator){
    let firstNum;
    let secondNum;
    let equationBox = document.querySelector(`.equation`);
    let result;

    switch(operator){
        case '+':
            firstNum = getRandomNum(25);
            secondNum = getRandomNum(25);
            equationBox.innerHTML = `${firstNum} + ${secondNum}`;
            return result = firstNum + secondNum;

        case '-':
            firstNum = getRandomNum(25);
            secondNum = getRandomNum(25);
            let max = Math.max(firstNum, secondNum);
            let min = Math.min(firstNum, secondNum);

            equationBox.innerHTML = `${max} - ${min}`;
            return result = max - min;
        
        case '*':
            firstNum = getRandomNum(12);
            secondNum = getRandomNum(12);
            equationBox.innerHTML = `${firstNum} * ${secondNum}`;
            return result = firstNum * secondNum;

        case '/':
            firstNum = getRandomNum(12);
            secondNum = getRandomNum(12);
            while(firstNum % secondNum != 0){
                firstNum = getRandomNum();
                secondNum = getRandomNum();
            }


            equationBox.innerHTML = `${firstNum} / ${secondNum}`;
            return result = firstNum / second;

    }
}

//grey out screen and 3 second countdown before game starts
//3-2-1 countdown in center page
function runCountdown(){
    let counter = document.querySelector(`.countdown`);
    let counterContainer = document.querySelector(`.countdownContainer`);
    counterContainer.style.display = "block";

    let timeleft = 3;
    let downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            counter.innerHTML = "Go";
            counterContainer.style.display = "none";
        } else {
            counter.innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
    
}

// Run level one
//This level will run for 30 seconds and will
// call the create equation function with the addition operator
function playLevelOne(){
    //level one = addition
    let result = createEquation('+');
    logoPosition();


    let heroLogos =  document.querySelectorAll(`.heroLogo`);
    let heroLogosValue =  document.querySelectorAll(`.result`);

    heroLogosValue.forEach(element => {
        element.innerHTML = getRandomNum(25);
    });


    for(i = 0; i < heroLogosValue.length; i++){
        heroLogosValue[i].addEventListener('click', ()=>{
            alert(heroLogosValue[i]);
        })
    }

    // heroLogos.forEach(element => {

    //     element.addEventListener('click', ()=>{
    //         alert(heroLogosValue)
    //     })
    // });
}

function getRandomPosition(){

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
}

main();