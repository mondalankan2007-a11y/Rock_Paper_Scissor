let Player = 0;
let Computer = 0;

function playGame(playerMove){

let random = Math.random();
let computerMove;

if (random < 0.33){
computerMove = "rock";
}
else if(random < 0.66){
computerMove = "paper";
}
else{
computerMove = "scissor";
}

let result = "";

if(playerMove === computerMove){
result = "Game Tied";
}
else if(
(playerMove === "rock" && computerMove === "scissor") ||
(playerMove === "paper" && computerMove === "rock") ||
(playerMove === "scissor" && computerMove === "paper")
){
result = "Player Wins";
Player++;
}
else{
result = "Computer Wins";
Computer++;
}

document.getElementById("result").innerHTML =
`Player: ${playerMove} <br> Computer: ${computerMove} <br> ${result}`;

document.getElementById("score").innerText =
`Player: ${Player} | Computer: ${Computer}`;

}