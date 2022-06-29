let playerScore = 0;
let computerScore = 0;
let round = 0;
let tiesInGame = 0;
let choices = ["Rock", "Paper", "Scissors"];
let locked = false; // anti spam lock function


// popup window close
const popup = document.querySelector('#closepopup');
const popupdiv = document.querySelector('.popUpWindows')
popup.addEventListener('click', () => {
  popupdiv.remove();
});
// score board display

function scoreboard(){
document.getElementById('playerscore').innerHTML = playerScore; // player score
document.getElementById('computerscore').innerHTML = computerScore; // computer score
document.getElementById('rounds').innerHTML = round; // rounds
document.getElementById('ties').innerHTML = tiesInGame;// ties
}

scoreboard(); // calling it the begining will display all zeros otherwise it will be blank untill you press a button

// anti spam unlock function
function unlock(){
  locked = false;
}

// buttons

// scissors
const btnScissors = document.querySelector('#ButtonScissors');
btnScissors.addEventListener('click', () => {
  if (locked == false){ //        \
    locked = true; //              - locking button for anti spamming
    setTimeout(unlock, 2000);//   /
  playerSelection = "Scissors";
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  round++
  endgame(playerScore, computerScore, round, tiesInGame);
  scoreboard(); // caling scoreboard to update the board
}});

// rock
const btnRock = document.querySelector('#ButtonRock');
btnRock.addEventListener('click', () => {
  if (locked == false){ //        \
    locked = true; //              - locking button for anti spamming
    setTimeout(unlock, 2000);//   /
  playerSelection = "Rock";
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  round++
  endgame(playerScore, computerScore, round, tiesInGame);
  scoreboard(); // caling scoreboard to update the board
}});

// paper
const btnPaper = document.querySelector('#ButtonPaper');
btnPaper.addEventListener('click', () => {
  if (locked == false){ //        \
    locked = true; //              - locking button for anti spamming
    setTimeout(unlock, 2000);//   /
  playerSelection = "Paper";
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  playRound(playerSelection, computerSelection);
  round++
  endgame(playerScore, computerScore, round, tiesInGame);
  scoreboard(); // caling scoreboard to update the board
}});

// functions

//this function clears the winner text after 2 seconds
function clearText() {
  document.getElementById('winner').innerHTML;
  setTimeout(function(){
  document.getElementById('winner').innerHTML = '';
  }, 2000);
}

// end message and resets the game
function endgame(){
  if (playerScore === 5){
    document.getElementById('winner').innerHTML = 'Congratulations You Win!!!';
    setTimeout(function(){
      document.getElementById('winner').innerHTML = '';
      }, 2000);
      playerScore = 0;
      computerScore = 0;
      round = 0;
      tiesInGame = 0;
  }
  if (computerScore === 5){
    document.getElementById('winner').innerHTML = 'O No You Lost The Game!!!';
    setTimeout(function(){
      document.getElementById('winner').innerHTML = '';
      }, 2000);
      playerScore = 0;
      computerScore = 0;
      round = 0;
      tiesInGame = 0;
  }
}

// difinds the winner and displays him in the windows, also it calls the function to clear it
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tiesInGame++
        document.getElementById('winner').innerHTML = `Its A Tie you Both choose ${playerSelection}!`; // display tie
        clearText(); // clears the text after 2 second
      }
      if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
      ) {
        playerScore++
        document.getElementById('winner').innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`; // display you win
        clearText(); // clears the text after 2 second
      }
      if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
      ) {
        computerScore++
        document.getElementById('winner').innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`; // display you loose
        clearText(); // clears the text after 2 second
      }
}
