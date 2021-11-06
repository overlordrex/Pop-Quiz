const resultDOM = document.querySelector(".result-box");
const restart = document.querySelector(".restart");
const quit = document.querySelector(".quit");
const remarksDOM = document.querySelector(".complete-text");
const scoreDOM = document.querySelector(".score-text");
const iconDOM = document.querySelector(".icon");

let username = sessionStorage.getItem("name");
let score = sessionStorage.getItem("score");

function showResult(){

    
    
    scoreDOM.innerHTML =  `<span>you scored: <span>${score}/100</span></span>`
    
    
    if (score < 50) {
        iconDOM.innerHTML = `<i class="fas fa-thumbs-down"></i>`
        remarksDOM.innerHTML =  `Hey <span>${username}</span><br>Thanks for playing.`;
             
         }else if(score >= 70){
             iconDOM.innerHTML = `<i class="fas fa-trophy"></i>` 
             remarksDOM.innerHTML =  `Hey <span>${username}</span><br>Thanks for playing.`;
    
         }else{
             iconDOM.innerHTML = `<i class="fas fa-medal"></i>`
             remarksDOM.innerHTML =  `Hey <span>${username}</span><br>Thanks for playing.`;
         }
  
}

restart.addEventListener("click", function(){
    location.href = "game.html"
    sessionStorage.removeItem("score")
})

quit.addEventListener("click", function(){
    location.href = "index.html"
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("score")
})

window.addEventListener("DOMContentLoaded", function(){
    showResult()

})




