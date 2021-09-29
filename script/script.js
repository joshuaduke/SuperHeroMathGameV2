
//Make Rules appear

let rulesBtn = document.querySelector(`.rules`);
let rulesContainer = document.querySelector(`.gameRules`)

rulesBtn.addEventListener("click", () => {
    rulesContainer.classList.toggle("show");
})

//close rules

let close = document.querySelector(`.close`)

close.addEventListener("click", ()=>{
    rulesContainer.classList.toggle("show");
})