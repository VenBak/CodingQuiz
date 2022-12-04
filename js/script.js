var playgame = document.querySelector("#playgame");
var question = 1;

// Renders the block elements to contain the Quiz when Play game is pressed
playgame.addEventListener("click", renderQuiz);
// Starts a timer when Play game is pressed
playgame.addEventListener("click", startTimer);

// Create elements with the question and answers

function renderQuiz() {
    // Create the question element
    
    // Grab the parent
        var quiz = document.querySelector(".quiz");
            // Create the Question element and the container for the answers
            var p = document.createElement("p");
            quiz.appendChild(p);
            var div = document.createElement("div");
            div.setAttribute("class", "answers");
            quiz.appendChild(div);
                var answerbox = document.querySelector(".answers");
                var divEl = document.createElement("div");
                answerbox.appendChild(divEl);
                divEl.setAttribute("class", "optionbox");
                    // Creates the div for the the answers and a p for the question
                    var optionbox = document.querySelector(".optionbox");
                    var question = document.createElement("p");
                    // Creates the first answer text and checkbox
                    var answer1text = document.createElement("p");
                    answer1text.setAttribute("class", "answer1text");
                    var answer1 = document.createElement("input");
                    answer1.setAttribute("type", "checkbox");
                    answer1.setAttribute("class", "answer1");
                    optionbox.append(question);
                    optionbox.append(answer1text);
                    optionbox.append(answer1);
                    // Creates the second answer text and checkbox
                    var answer2text = document.createElement("p");
                    answer2text.setAttribute("class", "answer2text");
                    var answer2 = document.createElement("input");
                    answer2.setAttribute("type", "checkbox");
                    answer2.setAttribute("class", "answer2");
                    optionbox.append(answer2text);
                    optionbox.append(answer2);
                    // Creates the third answer text and checkbox
                    var answer3text = document.createElement("p");
                    answer3text.setAttribute("class", "answer3text");
                    var answer3 = document.createElement("input");
                    answer3.setAttribute("type", "checkbox");
                    answer3.setAttribute("class", "answer3");
                    optionbox.append(answer3text);
                    optionbox.append(answer3);
                    // Creates the fourth answer text and checkbox
                    var answer4text = document.createElement("p");
                    answer4text.setAttribute("class", "answer4text");
                    var answer4 = document.createElement("input");
                    answer4.setAttribute("type", "checkbox");
                    answer4.setAttribute("class", "answer4");
                    optionbox.append(answer4text);
                    optionbox.append(answer4);
                    // Creates the next and back button to skip past this question
                    var answerbox2 = document.querySelector(".answers");
                    var divEl2 = document.createElement("div");
                    divEl2.setAttribute("class", "backnext");
                    answerbox2.appendChild(divEl2);
                    var backBtn = document.createElement("button");
                    Object.assign(backBtn, {
                    className: 'btn btn-danger',
                    onclick: function () {
                    question--;
                    }
                    })
                    // backBtn.addEventListener("click", question--);
                    var nextBtn = document.createElement("button");
                    // nextBtn.addEventListener("click", question++);
                    Object.assign(nextBtn, {
                    className: 'btn btn-success',
                    onclick: function () {
                    question--;
                    }
                    })
                    divEl2.append(backBtn);
                    divEl2.append(nextBtn);
                    document.querySelector(".btn-danger").innerHTML = "Back";
                    document.querySelector(".btn-success").innerHTML = "Next";                
                    

}

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
          // Calls function to create and append image
          alert("Your time is up");

        }
    
      }, 1000);
}

console.log(question);

// Give the question elements and answers the text


/*
var correctanswer = answertext.checked == true;

console.log(correctanswer);

question.createTextNode("Which actor played Jack Sparrow ?");

answer1.createTextNode("James Bond");
answer2.createTextNode("Johnny Depp");w
answer3.createTextNode("Tom Cruise");
answer4.createTextNode("Emma Stone");
*/




// If option 1 is checked, correctanswer = true
