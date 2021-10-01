
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






function main(){

}