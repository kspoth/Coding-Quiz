var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var welcome = document.querySelector(".welcome");
var answers = document.querySelector(".answers");
var start = document.querySelector("#start");
var frameScore = document.querySelector(".frame");

var highScores = []

//Timer function that starts when the user hits the start button.
var seconds = 75;

function timeClock() {
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "Time: " + seconds;
  
      if(seconds <= 0) {
        clearInterval(timerInterval);
        quizEnd();
      }

      if(question.textContent === "Finished!"){
        clearInterval(timerInterval);
        timer.textContent = "";
      }
  
    }, 1000);
  };

  init();

  function renderScores() {
    // This function roduces a list for each high score.
    for (var i = 0; i < highScores.length; i++) {
      var highScore = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = highScore;
      li.setAttribute("data-index", i);
    
      frameScore.appendChild(li);
    }
  }

  function init() {
    // Function that stores the high scores.
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedHighScores !== null) {
      highScores = storedHighScores;
      renderScores();
    }
  
  }



//Function that asks question one, provides an array of answers that are put through a for loop and attributed to buttons.
function questionOne() {
  start.remove();
  frameScore.remove();
  welcome.textContent = "";
  question.textContent = "What does HTML stand for?";
  //Create an array which creates buttons for each possible answer in a for loop
  var oneAnswers = ["Helpful Text Markup Language", "Hypertext Markup Language", "Hypertext Master Language", "Helpful Text Master Lingo"];
  for(var i = 0; i < oneAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = oneAnswers[i];
    answers.appendChild(button);
  };
  
  //This is the listener that checks the users answers with and if/else. If the answer is incorrect the program subtracts 10 seconds from the timer.
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "1"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionTwo();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionTwo();
    }      
  }, true);
};

//Function that asks question two, provides an array of answers that are put through a for loop and attributed to buttons.
function questionTwo() {
  answers.innerHTML = "";
  question.textContent = "Which index position is Star Wars?";
  welcome.textContent = "Movies ['Star Wars', 'Lord of the Rings', 'Harry Potter', 'Star Trek']";
  //Create an array which creates buttons for each possible answer in a for loop
  var twoAnswers = ["0", "1", "2", "3"];
  for(var i = 0; i < twoAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = twoAnswers[i];
    answers.appendChild(button);
  };
  //This is the listener that checks the users answers with and if/else. If the answer is incorrect the program subtracts 10 seconds from the timer.
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "0"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionThree();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionThree();
    }      
  }, true);
};

//Function that asks question three, provides an array of answers that are put through a for loop and attributed to buttons.
function questionThree() {
  answers.innerHTML = "";
  question.textContent = "Which of the following is cosidered a backend programming languange?";
  welcome.textContent = "";
  //Create an array which creates buttons for each possible answer in a for loop
  var threeAnswers = ["HTML","Bootstrap", "CSS", "JavaScript"];
  for(var i = 0; i < threeAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = threeAnswers[i];
    answers.appendChild(button);
  };
  //This is the listener that checks the users answers with and if/else. If the answer is incorrect the program subtracts 10 seconds from the timer.
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "3"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFour();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFour();
    }      
  }, true);
};

//Function that asks question four, provides an array of answers that are put through a for loop and attributed to buttons.
function questionFour() {
  answers.innerHTML = "";
  question.textContent = "What is an example of a JavaScript library?";
  //Create an array which creates buttons for each possible answer in a for loop
  var fourAnswers = ["Jquery", "Bootstrap", "RAM", "Hard drive"];
  for(var i = 0; i < fourAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = fourAnswers[i];
    answers.appendChild(button);
  };
  //This is the listener that checks the users answers with and if/else. If the answer is incorrect the program subtracts 10 seconds from the timer.
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "0"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFive();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFive();
    }      
  }, true);
};

//Function that asks question five, provides an array of answers that are put through a for loop and attributed to buttons.
function questionFive() {
  answers.innerHTML = "";
  question.textContent = "What does DOM stand for?";
  //Create an array which creates buttons for each possible answer in a for loop
  var fiveAnswers = ["Different Option Method", "Document Object Model", "Direct Offer Module", "Double Operating Machine"];
  for(var i = 0; i < fiveAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = fiveAnswers[i];
    answers.appendChild(button);
  };
  //This is the listener that checks the users answers with and if/else. If the answer is incorrect the program subtracts 10 seconds from the timer.
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "1"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      quizEnd();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      quizEnd();
    }      
  }, true);
};

//This funstion ends the timer and allows the user to add their intials into the high score.
function quizEnd() {
  answers.innerHTML = "";
  question.textContent = "Finished!";
  welcome.textContent = "Enter your initials to record your score!";
  var p = document.createElement("p");
  p.setAttribute("class", "score");
  p.textContent = "Score: " + seconds;
  answers.appendChild(p);
  var form = document.createElement("form");
  answers.appendChild(form);
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  form.appendChild(input);
  var submit = document.createElement("button");
  submit.setAttribute("class", "btn btn-dark");
  submit.textContent = "Submit!";
  form.appendChild(submit);
  submit.addEventListener("click", function(event){
    event.preventDefault();
    var inputText = input.value.trim();
      if(inputText === ""){
        return;
      }
    highScores.push(inputText + ": " + p.textContent);
    var frameScore = document.createElement("ul");
    answers.appendChild(frameScore);
    var recordedScore = document.createElement("li");
    recordedScore.textContent = inputText + ": " + p.textContent;
    input.value = "";
    frameScore.appendChild(recordedScore);
    storeInput();
    recordedScore();
  })
};

//function to store information to local storage
function storeInput(){
  localStorage.setItem("highScores", JSON.stringify(highScores));
}


//event listener for the start button
document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    timeClock();
    questionOne();
});