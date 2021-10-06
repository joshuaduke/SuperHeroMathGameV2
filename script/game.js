// retrieve user name value
let userName = document.getElementById(`userName`);
let modalErrorMsg = document.querySelector(`.errorMsg`);

//Details Modal
//display modal where user can enter name
let playBtn = document.querySelector(`.playBtn`);
let detailsModal = document.querySelector(`.userDetailsModal`);

playBtn.addEventListener("click", () => {
    if(userName.value == ""){
        modalErrorMsg.innerHTML = "Please Enter a User Name"
    } else {
        alert(userName.value);
        detailsModal.style.display = "none";
        runCountdown();
    }
    
})

//Return a random number from 1 - 12
function getRandomNum(){
    return Math.floor(Math.random() * 12) + 1 ;
}


function createEquation(operator){
    let firstNum = getRandomNum();
    let secondNum = getRandomNum();
    let equationBox = document.querySelector(`.equation`);
    let result;

    switch(operator){
        case '+':
            equationBox.innerHTML = `${firstNum} + ${secondNum}`;
            return result = firstNum + secondNum;

        case '-':
            let max = Math.max(firstNum, secondNum);
            let min = Math.min(firstNum, secondNum);

            equationBox.innerHTML = `${max} - ${min}`;
            return result = max - min;
        
        case '*':
            equationBox.innerHTML = `${firstNum} * ${secondNum}`;
            return result = firstNum * secondNum;

        case '/':
                        
            while(firstNum % secondNum != 0){
                firstNum = getRandomNum();
                secondNum = getRandomNum();
            }


            equationBox.innerHTML = `${firstNum} / ${secondNum}`;
            return result = firstNum / second;

    }

    
}

//grey out screen and 3 second countdown before game starts
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

function playLevelOne(){
    //level one = addition

}

function main(){

    //3-2-1 countdown in center page
    //level 1 starts
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

    createEquation('*');
}

main();