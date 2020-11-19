var questions = [
    {   question:"Who is the president of Nigeria",
        options:{A:"Goodluck Ebele Jonathan", 
            B:"Muhammadu Buhari",
            C:"Yemi Osinbajo"},
            answer:"B"
    },
    {   question:"When did Nigeria gain independence",
        options:{A:"1914", 
            B:"2020",
            C:"1960"},
        answer:"C"
    },
    {   question:"Which day is currently known as democracy day in Nigeria",
        options:{A:"January 1", 
            B:"May 27",
            C:"June 12"},
        answer:"C"
    },
    {   question:"Who is the first woman to drive a car in Nigeria",
        options:{A:"Funmilayo Ransom Kuti", 
            B:"Kemi Adeosun",
            C:"Innocent Chuckwuma (Innoson motors)"},
        answer:"A"
    },
    {   question:"What is the full meaning of COVID-19",
        options:{A:"Company of 19 visual devices", 
            B:"Corona Virus Disease 2019",
            C:"Common 19 Visual Diseases"},
        answer:"B"
    }
];
console.log("It works");

let index = 0;
let correct = 0;
let selectedOption = "";
let button = document.querySelector(".question-bar button");
let questionbar = document.querySelector(".question-bar");
let gameEnd = false;
let selectedCorrect ="";
let selectedWrong = "";
updateScreen();

function updateScreen(){
    updateScoreBoard();
    
    if(index < questions.length){
        var count = document.querySelector(".question-bar span");
        count.innerText = (index+1) + " of " +questions.length;

        var quest = document.querySelector(".question p");
        quest.innerText = questions[index].question;

        var option = document.querySelector(".A span");
        option.innerText = questions[index].options.A;

        option = document.querySelector(".B span");
        option.innerText = questions[index].options.B;

        option = document.querySelector(".C span");
        option.innerText = questions[index].options.C;
        
        //update index
        index++;

        selectedOption = "";
        button.disabled = true;
        if(index == questions.length){
            button.innerText = "End Game";
        }
    }else{
        //clear question panel and display score
        button.innerText = "";
        button.disabled = true;
        gameEnd  = true;
        clearScreen()

    }
}

function onNextQuestion(){
    //index has been updated in the update Screen
    //correct has been updated in the option Clicked
    removeclasses();
    updateScreen();
}

function updateScoreBoard(){
    var answered = document.querySelector(".answered .first");
    answered.innerText = index;
    answered = document.querySelector(".answered .last");
    answered.innerText = questions.length;

    var score = document.querySelector(".score .first");
    score.innerText = correct;
    score = document.querySelector(".score .last");
    score.innerText = index;
}


function optionClicked(option){
    if(button.disabled && !gameEnd){
        selectedOption = option;
        button.disabled = false;
        //check if selection is correct
        //update correct
        if(option == questions[index-1].answer){
            correct++;
            selectedCorrect = document.querySelector("."+option);
            selectedCorrect.classList.add("selected-correct")
        }else{
            selectedWrong = document.querySelector("."+option);
            selectedWrong.classList.add("selected-wrong");
            selectedCorrect = document.querySelector("."+questions[index-1].answer);
            selectedCorrect.classList.add("selected-correct")
        }
        updateScoreBoard();     
    }
        
}
function removeclasses(){
    if(selectedCorrect){
        selectedCorrect.classList.remove("selected-correct");
        selectedCorrect = "";
    }
    if(selectedWrong){
        selectedWrong.classList.remove("selected-wrong");
        selectedWrong = "";
    }
}

function restart(){
    index = 0;
    correct = 0;
    selectedOption = "";
    button.innerText = "Next Question >>>";
    button.disabled = true;
    gameEnd = false;
    removeclasses();
    updateScreen();
}
function clearScreen(){
    var count = document.querySelector(".question-bar span");
    count.innerText = "Ended";

    var quest = document.querySelector(".question p");
    quest.innerText = "The Game has ended. Check your score on the score board. \n To replay CLICK ON 'Restart Game'";

    var option = document.querySelector(".A span");
    option.innerText = "";

    option = document.querySelector(".B span");
    option.innerText = "";

    option = document.querySelector(".C span");
    option.innerText = "";
}


