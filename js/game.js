// Created the Questions for the quiz as an object

const Questions = [
{
    question: "Who played the role Jack Sparrow ?",
    answers: {
        a: "Tom Cruise",
        b: "Tom Hanks",
        c: "Tom and Jerry",
        d: "Johnny Depp"
    },
    correctanswer: "d",
},
{
    question: "Who played the role Forrest Gump ?",
    answers: {
        a: "Tom Cruise",
        b: "Tom Hanks",
        c: "John Travlota",
        d: "Johnny Depp",
    },
    correctanswer: "b"
},
{
    question: "Who played the Team Leader in Ocean's Eleven ?",
    answers: {
        a: "George Clooney",
        b: "Brad Pitt",
        c: "Both of the above",
        d: "They were all equal",
    },
    correctanswer: "d"
},
{
    question: "Who played the character of the Genie in the animated Aladdin ?",
    answers: {
        a: "Robin Williams",
        b: "Samuel L. Jackson",
        c: "Will Smith",
        d: "Ben Stiller",
    },
    correctanswer: "a"
},
{
    question: "Who played the character of the Genie in the real life Aladdin ?",
    answers: {
        a: "Will Smith",
        b: "Dwayne Johnson",
        c: "DJ Khaled",
        d: "Snoop Dogg",
    },
    correctanswer: "a"
},
{
    question: "Who plays the voice of lightning mcqueen in cars ?",
    answers: {
        a: "Seth Macfarlane",
        b: "Quentin Tarantino",
        c: "Bill Nye",
        d: "Owen Wilson",
    },
    correctanswer: "d"
},
{
    question: "Who is the actor with the most oscars",
    answers: {
        a: "Katherine Hepburn",
        b: "Keanu Reeves",
        c: "Nicolas Cage",
        d: "Tom Cruise",
    },
    correctanswer: "a"
},
{
    question: "Which actor has the most appearances in marvel movies",
    answers: {
        a: "Stan Lee",
        b: "Bruce Lee",
        c: "Tommy Lee",
        d: "Bobby Lee",
    },
    correctanswer: "a"
},
{
    question: "In which movie did Keanu Reeves out of the few listed ?",
    answers: {
        a: "Tenet",
        b: "Jimmy Neutron",
        c: "Bill & Ted",
        d: "Harold & Kumar",
    },
    correctanswer: "c"
},
{
    question: "Which actor plays the main role in the cobbler",
    answers: {
        a: "Ben Stiller",
        b: "Adam Sandler",
        c: "Johnny Depp",
        d: "James Franco",
    },
    correctanswer: "b"
},
{
        question: "Quiz is Over",
        answers: {
            a: "Save your score",
            b: "",
            c: "",
            d: "",
        },
        correctanswer: "b"
}



];

startTimer();
// update the quiz every second, so the
setInterval(renderquiz, 1000);
var index = 0;
var score = 0;

// Pull the specific question and answers and paste it into the content of the html

function renderquiz() {
document.querySelector("#question").innerHTML = Questions[index].question;
document.querySelector("#answer1").innerHTML = Questions[index].answers.a;
document.querySelector("#answer2").innerHTML = Questions[index].answers.b;
document.querySelector("#answer3").innerHTML = Questions[index].answers.c;
document.querySelector("#answer4").innerHTML = Questions[index].answers.d;
document.querySelector("#score").innerHTML = score
}

// Adds a point to the score if the answer is right, if not it changes question

// Answer a
// Adds an index after each question to rotate object and adds to the score if the index matches
var answer1 = document.querySelector("#answer1");
answer1.addEventListener
("click", function() {
    console.log("answer 1 clicked")
    if (index == 3) {
        score++;
    } 
    if (index == 4) {
        score++;
    }
    if (index == 6) {
        score++;
    }
    if (index == 7) {
        score++;
    }
    index++;
})

// Answer b
var answer2 = document.querySelector("#answer2");
answer2.addEventListener
("click", function() {
    console.log("answer 2 clicked");
    if (index == 1) {
        score++;
    }
    if (index == 9) {
        score++;
    }
    index++;
})

// Answer c
var answer3 = document.querySelector("#answer3");
answer3.addEventListener
("click", function() {
    if (index == 8) {
        score++;
    }
    index++;
})

// Answer d
var answer4 = document.querySelector("#answer4");
answer4.addEventListener
("click", function() {
    console.log("answer 4 clicked");
    if (index == 0) {
        score++;
    } 
    if (index == 2) {
        score++;
    }
    if (index == 5) {
        score++;
    }
    index++;
})


// Starts a countdown for the Quiz

function startTimer() {
    var timerEl = document.querySelector("#timer");
        var secondsLeft = 90;
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timerEl.textContent = "Time left: " + secondsLeft;
        
            if(secondsLeft === 0) {
              // Stops execution of action at set interval
              clearInterval(timerInterval);
              alert("Your time is up!")
              index + 10;
            }
          }, 1000);
    }

