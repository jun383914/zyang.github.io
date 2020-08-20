//setting variables to connect with my index.html
//game board
var col = 3;
var row = 3;
//Game Board will be represented as array of objects. like: [{0,0}=1; {0,1}=2;{0,2}=3.....]
var board = document.getElementsByClassName(".tablecontent").value;
console.log(board);
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

function setvalue() {
  for (let i = 0; i < numbers.length - 1; i++) {
    numbers[i].setAttribute("value", "numbers[i]");
  }
}

//Set a variable to keep track of movements
var movecounts = 0;

//Create JavaScript function to initialize the game and connect to html

//Create a function to generate number 1-8 randomly, but for now, will use hard coded value.

//Write a function to record user input: Hints: JavaScript Key Code; Event Listener; if(Botton.Click=40 etc.)
//Imagine that initially tile9 is always empty
//Because one tile can only change its position with empty tile next to it!!!
function clickcell(row, colomn) {
  var cellclicked=document.getElementById(row+colomn);
  var tile=cellclicked.className;
  if(tile!=tile9)
  //if empty cell is clicked, don't do anything.
  {
    //if the 
  }
}
//Write a function to locate the empty cell

//Write a function to swap empty cell
function swapcell(cell1, cell2) {
  var temp = document.getElementById("cell1").className;
  document.getElementById("cell1").className = document.getElementById(
    "cell2"
  ).className;
  document.getElementById(cell2).className = temp;
}
//Write a function to check winning condition
function checkforwinning() {
  for (var i = 0; i < board.length - 1; i++) {
    if (board[i] != i + 1) {
      return false;
    }
    return true;
  }
}
