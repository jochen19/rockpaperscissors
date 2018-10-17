// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES




// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    var randomNumber = 0;
    $("#shoot").click(function(){
        randomNumber = Math.random();
        userChoice = $("#input").val();
        
        $("#userChoice").text(userChoice); 
        
        if (randomNumber > .66){
            computerChoice = "rock";
        } else if (randomNumber < .66 && randomNumber > .33){
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        
        $("#computerChoice").text(computerChoice);
        
        if (userChoice === "rock" && computerChoice === "rock"){
            $("#winner").text("Draw");
        } else if (userChoice === "paper" && computerChoice === "rock"){
            $("#winner").text("User");
        } else if (userChoice === "scissors" && computerChoice === "rock"){
            $("#winner").text("Computer");
        }
    });
});
