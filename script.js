let choices = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('.result-display');
const userScoreDiv = document.querySelector('.user-score');
const computerScoreDiv = document.querySelector('.computer-score');

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

console.log({userScore})


choices.forEach(choice => choice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    computerChoice = getComputerChoice();
    getResult()

    computerScoreDiv.innerText = computerScore;
    userScoreDiv.innerText = userScore;

    
    
   

}));




const getComputerChoice = () => {
    choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];

}


const getResult = () => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.innerText = "YOU WIN!!!"
            return userScore++
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.innerText = "YOU LOSE!!!"
            return computerScore++

        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            resultDisplay.innerText = "ITS A DRAW!!!"
            break
    }   
}




