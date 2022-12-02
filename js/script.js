var question = document.querySelector('.question');

var answer1 = docuemnt.querySelector(".answer1");
var answer2 = docuemnt.querySelector(".answer2");
var answer3 = docuemnt.querySelector(".answer3");
var answer4 = docuemnt.querySelector(".answer4");



console.log(question);
console.log(answers);
console.log(answertext);


var correctanswer = answertext.checked == true;

console.log(correctanswer);

question.createTextNode("Which actor playe Jack Sparrow ?");

answer1.createTextNode("James Bond");
answer2.createTextNode("Johnny Depp");w
answer3.createTextNode("Tom Cruise");
answer4.createTextNode("Emma Stone");





// If option 1 is checked, correctanswer = true
