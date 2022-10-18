// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//first item event listener
//second event function to hide landing, start timer, unhide 1st div
//pull questions using function to add question text add eventlistener for click
// reuse second fucntion to pull next question
//after questions are over function to hide question div and show results

//declare HTML elements
var timer = document.getElementById("timer");
var timeEl = document.getElementById("time");
var intro = document.getElementById("intro");
var questionBox = document.getElementById("questionBox");
var question = document.getElementById("question");
var options = document.getElementById("options");
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");

var startBtn = document.getElementById("startBtn");

//declare questions object array
var myQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
  {
    title: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },
];
//these are variables for time
var qIndex = 0;
var time = myQuestions.length * 15;
var timerId;

//first item event listener
startBtn.onclick = startGame;

//function for time
function clock() {
  time--;
  timeEl.textContent = time;
  if (time <= 0) {
    gameOver();
  }
}
//second event function to hide landing, start timer, unhide 1st div
function startGame() {



    timerId=setInterval(clock, 1000);
    timeEl.textContent = time;
    // getQuestion();


}

//pull questions using function to add question text add eventlistener for click
// reuse second fucntion to pull next question
//after questions are over function to hide question div and show results

function gameOver() {
    console.log("game over")
}

// function showQuestion(q) {
//   var titleDiv = document.getElementById("title");
//   titleDiv.textContent = q.title;

//   var answers = document.querySelectorAll(".answers");

//   answers.forEach(function (element, index) {
//     element.textContent = q.answers[index];

//     element.addEventListener("click", function () {
//       element.textConent = "a";
//     });
//   });
// }

// showQuestion(myQuestions);

// var startButton = document.getElementById("startButton");
// startButton.addEventListener("click", function () {});

//  {
//  question: "Arrays in JavaScript can be used to store ______.",
//  answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//  correctAnswer: "all of the above",
//  }

//  ]

// var myQuestions = [
// 	{
// 		question: "What is 10/2?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '115'
// 		},
// 		correctAnswer: 'b'
// 	},
// 	{
// 		question: "What is 30/3?",
// 		answers: {
// 			a: '3',
// 			b: '5',
// 			c: '10'
// 		},
// 		correctAnswer: 'c'
// 	}
// ];

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// funtion showQuestions(questions, quizContainer){
//     var output = [];
//     var answers;

//     for(var i=0; i<questions.length; i++)

//     answers = [];

//     // for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
//     function showResults(questions, quizContainer, resultsContainer){
// 		// code will go here
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }
