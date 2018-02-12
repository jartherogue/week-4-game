$(document).ready(function () {
    //getting a random number between 19 - 120 to play the game with.
    var randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    var crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    var score = [];
    var total = 0;
    var wins = 0
    var losses = 0
    console.log(randNum);
    $('#gameWins').html(wins);
    $('#gameLosses').html(losses);
    //each crystal getting a random number between 1-12 when the page loads and onclick 
    //but when I do all within same function, each time I click, the whole game changes.
    //went to HTML file and changed put buttons inside of crystal image divs to give each button individual click function.
    $("#gameNum").on("click", function () {
        $('#gameNum').html(randNum);
        console.log(randNum);
    });
    //pushing the value from crystalOne into array score when button is clicked.
    $('#crystalOne').on('click', function () {
        score.push(crystalOne);
        total = total + crystalOne;
        $('#yourScore').html(total);
        console.log(crystalOne);
        console.log(score);
        console.log(total);
        //If statement to set an alert if we win, and another below if we lose. Also, to add a number to the wins, or losses stat.
        if (total === randNum) {
            alert("Congratulations, you win!");
            //adding value to wins var and also putting the wins var value into the html to display number of wins and losses.
            wins++;
            $('#gameWins').html(wins);
            //Now I need to create an event that resets each game variable and says "Click to Play Again" in the randNum Div. I think I can make it part of the IF statement.
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                //I deciced to try to put the math.randoms in the click function instead of outside it, since the game started with a click function, it makes sense it would again.
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                //discovered that I want the total set to zero inside of this click function, otherwise the total score doesn't reset to zero until you click a crystal after you click "play again." Although, now that I'm testing it, it's the same thing. so... still looking for where to reset the total score...
                total = 0;
            });
            // total = 0;
        };
        if (total > randNum) {
            alert("Sorry, you lose. Try again!");
            losses++;
            $('#gameLosses').html(losses);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
            //total = 0;
        };
        console.log(wins);
        console.log(losses);
    });
    $('#crystalTwo').on('click', function () {
        score.push(crystalTwo);
        total = total + crystalTwo;
        $('#yourScore').html(total);
        console.log(crystalTwo);
        console.log(score);
        console.log(total);
        if (total === randNum) {
            alert("Congratulations, you win!");
            wins++;
            $('#gameWins').html(wins);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
            // total = 0;
        };
        if (total > randNum) {
            alert("Sorry, you lose. Try again!");
            losses++;
            $('#gameLosses').html(losses);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
            //total = 0;
        };
        console.log(wins);
        console.log(losses);

    });
    $('#crystalThree').on('click', function () {
        score.push(crystalThree);
        total = total + crystalThree;
        $('#yourScore').html(total);
        console.log(crystalThree);
        console.log(score);
        console.log(total);
        if (total === randNum) {
            alert("Congratulations, you win!");
            wins++;
            $('#gameWins').html(wins);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
            // total = 0;
        };
        if (total > randNum) {
            alert("Sorry, you lose. Try again!");
            losses++;
            $('#gameLosses').html(losses);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
            //total = 0;
        };

        console.log(wins);
        console.log(losses);

    });
    $('#crystalFour').on('click', function () {
        score.push(crystalFour);
        total = total + crystalFour;
        $('#yourScore').html(total);
        console.log(crystalFour);
        console.log(score);
        console.log(total);
        if (total === randNum) {
            alert("Congratulations, you win!");
            wins++;
            $('#gameWins').html(wins);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);
                total = 0;
            });
        };
        if (total > randNum) {
            alert("Sorry, you lose. Try again!");
            losses++;
            $('#gameLosses').html(losses);
            // randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            // crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            $('#gameNum').html('Click to Play Again!');
            $("#gameNum").on("click", function () {
                randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                crystalOne = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalThree = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                crystalFour = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                $('#gameNum').html(randNum);

                total = 0;
            });
        };
        console.log(wins);
        console.log(losses);
    });
    //Trying to get each number to go to the array and then add the numbers each time a new number hits the array from the clicks.
//Turns out, I didn't need to do this below. it does store a bunch of data, but I could never figure out how to get the sum of all the integers in the array, plus it would've been tricky trying to reset it.
    $.each(score, function (index, value) {
        total += value;
        total.push(value);
        console.log(value);
        console.log(total);
    });

    //Get help on how to use .each to sum up integers from array.... 
    //Game is bugging. When i hit the exact number of my random game number. it is alerting win, and loss, and also scoring a win and a loss....... 
    // Two things to fix w/ someone in class - Why total score won't reset when it's supposed to, and why. I fixed the alerting win, and alerting loss bug. Still can't figure out why total isn't resetting when I want it to.
});
