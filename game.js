const question = document.querySelector(".question");
const questionDOM = document.querySelector(".question-wrapper");
const optionDOM = document.querySelector(".options-wrapper");
const nextBtn = document.querySelector(".next-btn")



const questions = [
    {
        numb: 1,
        question: "when is democracy day celebrated in nigria ?",
        answer: "June 12",
        options: [
            "May 29",
            "June 12",
            "August 16",
            "Decemeber 25",
        ]
    },
    {
        numb: 2,
        question: "the most populated country in the world is ?",
        answer: "China",
        options: [
            "India",
            "United states of american",
            "China",
            "South african",
        ]
    },
    {
        numb: 3,
        question: "what's the first nigeria album to chart billboard 100 ?",
        answer: "Made in lagos",
        options: [
            "Sorry I'm late",
            "Made in lagos",
            "Twice as tall",
            "A better time",
        ]
    },
    {
        numb: 4,
        question: "it takes the earth ____ days to complete one revolution ?",
        answer: "365",
        options: [
            "264",
            "499",
            "565",
            "365",
        ]
    },
    {
        numb: 5,
        question: "what is the biggest city in africa ?",
        answer: "Kinshasa",
        options: [
            "Ibadan",
            "Cape Town",
            "Accra",
            "Kinshasa",
        ]
    },
    {
        numb: 6,
        question: "what is the smallest city in africa ?",
        answer: "Port Victoria",
        options: [
            "Cairo",
            "Port Victoria",
            "Nairobi",
            "Jos",
        ]
    },
    {
        numb: 7,
        question: "who is the king of afro beat in africa ?",
        answer: "Fela Anikulapo Kuti",
        options: [
            "Wizkid",
            "Fela Anikulapo Kuti",
            "Burna Boy",
            "Davido",
        ]
    },
    {
        numb: 8,
        question: "what's the capital of nigeria ?",
        answer: "Abuja",
        options: [
            "Abuja",
            "Rivers State",
            "Lagos",
            "Kaduna",
        ]
    },
    {
        numb: 9,
        question: "what's the smallest state in Nigeria ?",
        answer: "Lagos",
        options: [
            "Kaduna",
            "Abuja",
            "Rivers State",
            "Lagos",
        ]
    },
    {
        numb: 10,
        question: "the most populated state in nigeria is ?",
        answer: "Lagos",
        options: [
            "Rivers State",
            "Kaduna",
            "Lagos",
            "Abuja",
        ]
    },

]

let questionCount = 0;
let score = 0;
let currentQuestion;
let availableQuestion = [];
let availableOption = [];

sessionStorage.setItem("score",score)

function setAvailableQuestion() {
    const totalQuestion = questions.length;

    questions.map(question => {
       availableQuestion.push(question)

    })

}



function showQuestions(){
    const randomQuestion = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
    currentQuestion = randomQuestion;

    question.innerHTML = `<h2>${questionCount + 1}. ${currentQuestion.question}</h2>`;

    const indexNumber = availableQuestion.indexOf(randomQuestion)
   
    availableQuestion.splice(indexNumber,1)

    const optionLen = currentQuestion.options.length


        let html = `
                    
                         
                    <div class="option-container">
                        <div class="prefix">A</div>
                        <div class="option">${currentQuestion.options[0]}</div>
                    </div>
                       
                    <div class="option-container">
                        <div class="prefix">B</div>
                        <div class="option">${currentQuestion.options[1]}</div>
                    </div>
                    
                    <div class="option-container">
                        <div class="prefix">C</div>
                        <div class="option">${currentQuestion.options[2]}</div>    
                    </div>
                    
                    <div class="option-container ">
                        <div class="prefix">D</div>
                        <div class="option">${currentQuestion.options[3]}</div> 
                    </div>            

        `;

        optionDOM.innerHTML = html
   
        questionCount++;

    
        const options = document.querySelectorAll(".option");
        options.forEach(option => {
           option.addEventListener("click", function(){
            
              const userAnswer = option.innerHTML;
              const correctAnswer = currentQuestion.answer
                disable()

              if (userAnswer === correctAnswer) {          
                option.classList.add("correct")
                  score += 10;
                 sessionStorage.setItem("score",score)
              }else{
                option.classList.add("error")

              }

              

           })
        })

        function disable(){
            optionDOM.classList.add("disabled")
        //     const options = document.querySelectorAll(".option"); 
        //    options.classList.add("disabled")
            
        }

}



nextBtn.addEventListener("click", nextQuestion)
function nextQuestion() {
    if (questionCount === questions.length) {
        location.href = "end.html"
        console.log("the end");
        console.log(score);
    }
    else{
        showQuestions()
        optionDOM.classList.remove("disabled")

    }


}

window.addEventListener("DOMContentLoaded", function(){
    setAvailableQuestion()
    showQuestions()

    
})