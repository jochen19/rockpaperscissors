// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    var userScore = 0;
    var computerScore = 0;
    var randomNumber = 0;
    $("#shoot").click(function(){
        randomNumber = Math.random();
        userChoice = $("#input").val().toLocaleLowerCase();
        
        $("#userChoice").text(userChoice); 
        
        if (randomNumber > .66){
            computerChoice = "rock";
        } else if (randomNumber < .66 && randomNumber > .33){
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        
        $("#computerChoice").text(computerChoice);
        
        if (userChoice === "rock"){
            if (computerChoice === "rock"){
                $("#winner").text("Draw");
            } else if (computerChoice === "paper"){
                $("#winner").text("Computer");
                winner = "computer";
            } else if (computerChoice === "scissors"){
                $("#winner").text("User");
                winner = "user";
            }
        } else if (userChoice === "paper"){
            if (computerChoice === "rock"){
                $("#winner").text("User");
                winner = "user";
            } else if (computerChoice === "paper"){
                $("#winner").text("Draw");
            } else if (computerChoice === "scissors"){
                $("#winner").text("Computer");
                winner = "computer";
            }
        } else if (userChoice === "scissors"){
            if (computerChoice === "rock"){
                $("#winner").text("Computer");
                winner = "computer";
            } else if (computerChoice === "paper"){
                $("#winner").text("User");
                winner = "user";
            } else if (computerChoice === "scissors"){
                $("#winner").text("Draw");
            }
        } else {
            $("#winner").text("Invalid Input");
        }
        
        if (winner === "user"){
            userScore = userScore + 1;
            $("#userScore").text(userScore);
        } else if (winner === "computer"){
            computerScore = computerScore + 1;
            $("#computerScore").text(computerScore);
        }
    });
});
