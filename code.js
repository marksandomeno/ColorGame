
setBoard();
var p1Score = 0;
var p2Score = 0;
var randButtonId;
var currentPlayer = 1;

function setBoard() {

var R = randomNumber(0,255);
var G = randomNumber(0,255);
var B = randomNumber(0,255);
var color = rgb(R, G, B);

setProperty("button1", "background-color", color);
setProperty("button2", "background-color", color);
setProperty("button3", "background-color", color);
setProperty("button4", "background-color", color);

var diffColor = rgb(R+50,G+50, B+50);

randButtonId = "button"+randomNumber(1,4);   // create a random button Id
setProperty(randButtonId, "background-color", diffColor);// set its color to diffColor
console.log(randButtonId);

console.log("correct one is: " + randButtonId);
  
}

//this is going to take in the buttonId that we click
function checkCorrect(buttonId) {
  
 
  console.log("Checking: "+buttonId);
    if( buttonId == randButtonId ) {
      updateScoreBy(1);
      checkGameOver();
      
        console.log("You got it right!");
       
    } else {
        updateScoreBy(-3);
        checkGameOver();
        
        console.log("WRONG");
        
      
        
    }
  setBoard();
  switchPlayer();
  
}

function switchPlayer() {

if(currentPlayer == 1) {
  currentPlayer = 2;
  showElement("player2_highlight");
  hideElement("player1_highlight")
  
} else {
  
  currentPlayer = 1;
  showElement("player1_highlight");
  hideElement("player2_highlight")
}

console.log("current player is: " + currentPlayer);

}

//takes in an amount
//cool naming
function updateScoreBy(amt) {
  
  if(currentPlayer == 1) {
    
    p1Score = p1Score + amt;
    setText("score1_label", p1Score);
    
    
  }else {
    
    p2Score = p2Score + amt
    setText("score2_label", p2Score);
    
  }
  
  console.log("P1 score: "+ p1Score);
  console.log("P2 score: "+ p2Score);
  
}

function checkGameOver() {
  
  if(p1Score == 10) {
    
    setScreen("gameOver_screen")
    showElement("player1Win_label")
    hideElement("player2Win_label")
  } else if (p2Score == 10) {
      setScreen("gameOver_screen")
    showElement("player2Win_label")
    hideElement("player1Win_label")
    
  }else {
    
    
    
  }
  
  
  
}

//when buttons are clicked we want there ids to get checked

onEvent("button1", "click", function(event) {
   checkCorrect("button1");
});
onEvent("button2", "click", function(event) {
   checkCorrect("button2");
});
onEvent("button3", "click", function(event) {
   checkCorrect("button3");
});
onEvent("button4", "click", function(event) {
   checkCorrect("button4");
});
onEvent("playAgain", "click", function(event) {
  setScreen("gamePlay_screen");
  p1Score = 0;
  p2Score = 0;
  setText("score1_label", p1Score);
  setText("score2_label", p2Score);
  
});
