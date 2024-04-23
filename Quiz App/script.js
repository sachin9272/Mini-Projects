const quiz = [

    {
        question: "What is the most used Programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },
    {
        question:"What does HTML stand for?",
        ans1text:"Hypertext linkup Language",
        ans2text:"Hypertext markup Language",
        ans3text:"Hypertext transfer Protocol",
        ans4text:"Cascading style sheet",
        answer:"Hypertext markup Language",
    },
    {
        question:"What year was JavaScript launched?",
        ans1text:"1996",
        ans2text:"1995",
        ans3text:"1994",
        ans4text:"None of the above",
        answer:"1995",
   }

]

const question = document.getElementById("quiz-question");
const option_a = document.getElementById("text-option-a");
const option_b = document.getElementById("text-option-b");
const option_c = document.getElementById("text-option-c");
const option_d = document.getElementById("text-option-d");
const answerElement = document.querySelectorAll(".answer");
const submit = document.getElementById("Submit");

let currQuestion = 0;
let score = 0;

question.textContent = quiz[currQuestion].question;
option_a.textContent = quiz[currQuestion].ans1text;
option_b.textContent = quiz[currQuestion].ans2text;
option_c.textContent = quiz[currQuestion].ans3text;
option_d.textContent = quiz[currQuestion].ans4text;
 
submit.addEventListener("click",() => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAns);
  if(checkedAns == null){
    alert("Please select an answer");
  }else{
    if(checkedAns.nextElementSibling.textContent === quiz[currQuestion].answer){
        score++;
    }
    currQuestion++;
    if(currQuestion<quiz.length){
        checkedAns.checked = false;
        question.textContent = quiz[currQuestion].question;
        option_a.textContent = quiz[currQuestion].ans1text;
        option_b.textContent = quiz[currQuestion].ans2text;
        option_c.textContent = quiz[currQuestion].ans3text
        option_d.textContent = quiz[currQuestion].ans4text
    }
    else{
        alert("Your score is " + score);
        location.reload();
    }
  }
});