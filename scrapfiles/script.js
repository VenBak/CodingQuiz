var playgame = document.querySelector("#playgame");
var question = 1;
var correctanswers = 0;

// Renders the block elements to contain the Quiz when Play game is pressed
playgame.addEventListener("click", renderQuiz, {once:true});
// Starts a timer when Play game is pressed
playgame.addEventListener("click", startTimer, {once:true});

// Create elements with the question and answers

function renderQuiz() {
    // Create the question element
    
    // Grab the parent
        var quiz = document.querySelector(".quiz");
            // Create the Question element and the container for the answers
            
            var div = document.createElement("div");
            div.setAttribute("class", "answers");
            quiz.appendChild(div);
                var answerbox = document.querySelector(".answers");
                var divEl = document.createElement("div");
                answerbox.appendChild(divEl);
                divEl.setAttribute("class", "optionbox");
                    // Creates the div for the the answers and a p for the question
                    var optionbox = document.querySelector(".optionbox");
                    var questionEl = document.createElement("p");
                    questionEl.setAttribute("class", "questiontext"); 
                    // Creates the first answer text and checkbox
                    var answer1text = document.createElement("p");
                    answer1text.setAttribute("class", "answer1text");
                    var answer1 = document.createElement("input");
                    answer1.setAttribute("type", "checkbox");
                    answer1.setAttribute("class", "answer1");
                    optionbox.append(questionEl);
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
                    var nextBtn = document.createElement("button");
                    Object.assign(nextBtn, {
                    className: 'btn btn-danger',
                    })
                    var submitBtn = document.createElement("button");
                    Object.assign(submitBtn, {
                    className: 'btn btn-success',
                    })
                    divEl2.append(nextBtn);
                    divEl2.append(submitBtn);
                    document.querySelector(".btn-danger").innerHTML = "Next";
                    document.querySelector(".btn-success").innerHTML = "Submit";               

                    // Adds 1 or removes 1 based on if the back and next button is pressed so I can change the content of the question and answers
                    var nextEl = document.querySelector(".btn-danger");
                    var submitEl = document.querySelector(".btn-success");
                    
                    nextEl.addEventListener("click", function () { 
                        question++;
                     })
                     submitEl.addEventListener("click", function () { 
                        clearContent();
                    })
                    
                    localStorage.setItem("points")
                    Question1();


                    if (document.querySelector(".answer2").checked) {
                        
                    } else {

                    }
                        
                    

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
          clearContent();


        }
    
      }, 1000);
}

//

function clearContent() {
    document.querySelector(".questiontext").innerHTML = "";
    document.querySelector(".answer1text").innerHTML = "";
    document.querySelector(".answer2text").innerHTML = "";
    document.querySelector(".answer3text").innerHTML = "";
    document.querySelector(".answer4text").innerHTML = "";
}
// Question 1 
// Create variables for the question and answers
function Question1 () {
    var question1content = "What is the actor's name who played Jack sparrow ?"
    var answer1content = "Tom Cruise";
    var answer2content = "Johnny Depp";
    var answer3content = "Samuel L. Jackson";
    var answer4content = "Emma Stone";
    
    // Changes the html content to the new content
    document.querySelector(".questiontext").innerHTML = (question1content);
    document.querySelector(".answer1text").innerHTML = (answer1content);
    document.querySelector(".answer2text").innerHTML = (answer2content);
    document.querySelector(".answer3text").innerHTML = (answer3content);
    document.querySelector(".answer4text").innerHTML = (answer4content);
}

function Question2 () {
    clearContent();
    var question2content = "Which actor played Forrest Gump"
    var answer2content1 = "Omar Sy";
    var answer2content2 = "Tony Montana";
    var answer2content3 = "Chadwick Boseman";
    var answer2content4 = "Tom Hanks";
    
    // Changes the html content to the new content
    document.querySelector(".questiontext").innerHTML = (question2content);
    document.querySelector(".answer1text").innerHTML = (answer2content1);
    document.querySelector(".answer2text").innerHTML = (answer2content2);
    document.querySelector(".answer3text").innerHTML = (answer2content3);
    document.querySelector(".answer4text").innerHTML = (answer2content4);
}


Object

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
