let user = 0;
let computer = 0;

let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");



const playGame = (userChoice) => {
    console.log("User Choice =", userChoice)
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if (userChoice === compChoice) { //draw choice
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {

            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    };

};

const msgpara = document.querySelector("#msg");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        user++;
        userScore.innerText = user;
        console.log("You Win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computer++;
        compScore.innerText = computer;
        console.log('You Lose!');
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const drawGame = () => {
    console.log("The game was draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#284b63";
}

const choices = document.querySelectorAll(".choice")
choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id"); // show to attribute of html element
    choice.addEventListener("click", () => {
        // console.log("choice is Clicked", userChoice);
        playGame(userChoice);
    });
});

// gen rock paper scissors 
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);  // math floor is used for not show any decimal num 
    return options[randomIdx];
}