var playerScore = 0;
var computerScore = 0;

$(function () {
    $("button").click(function(){
        $("#outcome").removeClass("win").removeClass("tie").removeClass("lose").css("visibility", "hidden");
        $("#game > div").removeClass("rock").removeClass("paper").removeClass("scissors");
        var playerChoice = $(this).val();
        countDown(playerChoice);
    });
});
function showCountDown(countDown) {
    $("#counter").text(countDown);
}
function countDown(playerChoice) {
    var countDown = 4;
    var timer = setInterval(function () {
        $("#counter").css("visibility", "visible");
        countDown--;
        showCountDown(countDown);

        if (countDown == 3){
            $("#counter").text("3...");
        } if (countDown == 2){
            $("#counter").text("3... 2...");
        } if (countDown == 1){
            $("#counter").text("3... 2... 1...");
        } if (countDown == 0){

            clearInterval(timer);

            $("#counter").css("visibility", "hidden");

            determineGame(playerChoice);
        }
    }, 1000)
}

function randomResult(){
    var result;
    switch(Math.floor(Math.random()*3)) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;

}

function determineGame(playerChoice) {
    //this determines the computer input
    var computerResult = randomResult();

    setImages(1, playerChoice);
    setImages(2, computerResult);

    determineWinner(playerChoice, computerResult);

    $(".score:first span").text(playerScore);
    $(".score:last span").text(computerScore);


}

function setImages(playerTypeInt, playerChoiceString) {
    var changePosition;

    if (playerTypeInt == 1) {
        changePosition = $("#player");
    } else {
        changePosition = $("#computer");
    }

    if (playerChoiceString == "rock"){

         $(changePosition).addClass("rock").css("visibility", "visible");;

    } else if (playerChoiceString == "paper"){

        $(changePosition).addClass("paper").css("visibility", "visible");;

    } else if (playerChoiceString == "scissors"){

        $(changePosition).addClass("scissors").css("visibility", "visible");;

    }
}

function determineWinner(playerChoice, computerChoice){
    if ((playerChoice == "rock" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore = playerScore + 1;
        $(".score:first span").text(playerScore);

    } else if ((playerChoice == "rock" ) && (computerChoice == "rock")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    } else if ((playerChoice == "rock" ) && (computerChoice == "paper")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore = computerScore + 1;
        $(".score:last span").text(computerScore);

    } else if ((playerChoice == "paper" ) && (computerChoice == "rock")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore++;
        $(".score:first span").text(playerScore);

    } else if ((playerChoice == "paper" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore++;
        $(".score:last span").text(computerScore);

    } else if ((playerChoice == "paper" ) && (computerChoice == "paper")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    } else if ((playerChoice == "scissors" ) && (computerChoice == "paper")){
        $("#outcome").addClass("win").text("Winner!").css("visibility", "visible");;
        playerScore++;
        $(".score:first span").text(playerScore);

    } else if ((playerChoice == "scissors" ) && (computerChoice == "rock")){
        $("#outcome").addClass("lose").text("Loser!").css("visibility", "visible");;
        computerScore++;
        $(".score:last span").text(computerScore);

    } else if ((playerChoice == "scissors" ) && (computerChoice == "scissors")){
        $("#outcome").addClass("tie").text("Tie!").css("visibility", "visible");;

    }
}