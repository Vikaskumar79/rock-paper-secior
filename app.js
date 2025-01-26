let userScore = 0;
let compScore = 0;

const userScoreCard = document.querySelector("#user-score");
const compScoreCard = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg"); 

const genCompChoice = () =>{
    const option = ["rock", "paper","scissor"];
    const randInd = Math.floor(Math.random() *3);
    return option[randInd]
}

const gameDwaw = ()=>{
    msg.innerText= "Game draw!, play again"
    msg.style.backgroundColor = "#081b31"
}

const showWin = (userWin , userChoice, compChoise)=>{
    if(userWin){
        userScore++;
        userScoreCard.innerText = userScore;
        msg.innerText =`you Win! your ${userChoice} beats ${compChoise} `;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScoreCard.innerText = compScore;
        msg.innerText=`You lose. ${compChoise} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame=(userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoise = genCompChoice();
    console.log("comp choice = ",compChoise);
    if(compChoise === userChoice){
        gameDwaw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoise==="paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoise ==="scissor"? false:true;
        }else{
            userWin = compChoise === "rock"?false:true;
        }
        showWin(userWin ,userChoice, compChoise);
    }
   
} ;


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    }); 
});