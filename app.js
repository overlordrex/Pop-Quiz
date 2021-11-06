const playBtn = document.querySelector(".play-btn");


playBtn.addEventListener("click", getUserInfo)

function getUserInfo() {
        let name = document.querySelector(".input").value;
        sessionStorage.setItem("name" , name)

    
        location.href = "game.html"

        document.querySelector(".input").value = '';

        
}


