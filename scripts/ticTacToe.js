var moves = ['rock', 'paper', 'scissors'];

function getResult(playerMove, computerMove){
    if(playerMove == computerMove){
        return 0;
    } else if(
            (playerMove == 'rock' && computerMove == 'scissors') ||
            (playerMove == 'paper' && computerMove == 'rock') ||
            (playerMove == 'scissors' && computerMove == 'paper')
        ){
        return 1;
    } else {
        return -1;
    }
}

$(function(){

    // get references to the divs for both the player and computer
    var player = $("#player");
    var computer = $("#computer");

    var playerScore = 0;
    var computerScore = 0;

    var playerScoreDisplay = player.find(".score span");
    playerScoreDisplay.text(playerScore);

    var computerScoreDisplay = computer.find(".score span");
    computerScoreDisplay.text(computerScore);

    var outcome = $("#outcome");

    $("#actionForm").find("button").click(function(){
        // reset display
        outcome.removeClass("win lose tie");
        outcome.text("");
        player.removeClass("rock paper scissors");
        computer.removeClass("rock paper scissors");

        // player move
        var playerMove = $(this).val();
        player.addClass(playerMove);

        // computer move
        var computerMove = moves[Math.round(Math.random() * 2)];
        computer.addClass(computerMove);

        // get the result of the game
        var result = getResult(playerMove, computerMove);

        if(result == 0){
            // tie game
            outcome.addClass("tie");
            outcome.text("Tie Game");
        } else if(result == 1){
            // win
            outcome.addClass("win");
            outcome.text("You Win!");
            playerScore++;
        } else if(result == -1){
            // win
            outcome.addClass("lose");
            outcome.text("You Lose");
            computerScore++;
        }

        playerScoreDisplay.text(playerScore);
        computerScoreDisplay.text(computerScore);

    });

});

