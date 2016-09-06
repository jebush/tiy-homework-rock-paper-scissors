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

    var player = $("#player");
    var computer = $("#computer");

    var playerScore = 0;
    var computerScore = 0;

    var playerScoreDisplay = player.find(".score span");
    playerScoreDisplay.text(playerScore);

    var computerScoreDisplay = computer.find(".score span");
    computerScoreDisplay.text(computerScore);

    var outcome = $("#outcome");

    var counter = $("#counter");

    $("#actionForm").find("button").click(function(){
        // reset display
        outcome.removeClass("win lose tie");
        outcome.text("");
        outcome.hide();

        player.removeClass("rock paper scissors");
        computer.removeClass("rock paper scissors");

        // player move
        var playerMove = $(this).val();

        // computer move
        var computerMove = moves[Math.round(Math.random() * 2)];

        var countDown = 3;

        counter.text("");
        counter.show();

        $("#counter").append(countDown + "... ");
        var timer = setInterval(function () {
            if(countDown == 1){
                clearInterval(timer);
                displayOutcome(playerMove, computerMove);
                return;
            }

            countDown--;
            $("#counter").append(countDown + "... ");


        }, 1000);

    });


    function displayOutcome(playerMove, computerMove){
        counter.hide();
        outcome.show();

        // get the result of the game
        var result = getResult(playerMove, computerMove);

        player.addClass(playerMove);
        computer.addClass(computerMove);

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
    }

});


