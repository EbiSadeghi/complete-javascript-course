/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying

//Call initialization
init();

//Second form roll button functionality
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number != 1
        if (dice !== 1) {
            //Add score to player's "current" container
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //Change players
            nextPlayer();

        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        //Add "current" score to "global" score
        scores[activePlayer] += roundScore;

        //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check to see if player won

        if(scores[activePlayer] >= 100){
            //Show winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            //Remove dice
            document.querySelector('.dice').style.display = 'none';
            //Restyle
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            //Stop playing
            gamePlaying = false;
        } else{
            //Change player
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
    //Set first players score to zero
    roundScore = 0;

    //Update display
    //Change Current number
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   
    //Change active class in HTML
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //Hide dice on startup
    document.querySelector('.dice').style.display = 'none';

    //Initialize values to zero
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //document.getElementById('.player-0-panel').classList.remove('winner');
    //document.getElementById('.player-1-panel').classList.remove('winner');

    //document.getElementById('.player-0-panel').classList.remove('active');
    //document.getElementById('.player-1-panel').classList.remove('active');

   // document.getElementById('.player-0-panel').classList.add('active');
}








/*
var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;
var gamePlaying = true;
*/
//var dice = Math.floor(Math.random()*6)+1;
//console.log("Dice: " + dice);

//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//Roll button functionality

/*
function btn(){
    //
}
*/
//document.querySelector('.btn-roll').addEventListener('click', btn);
/*
    We do not add parenthesis to btn(), because we want the event
    listener to call it for us
*/