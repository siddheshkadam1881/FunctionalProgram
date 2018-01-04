/******************************************************************************
 *
 *  Purpose         :  Program to play a Cross Game or Tic­Tac­Toe Game. Player 1 is
                     the Computer and the Player 2 is the user. Player 1 take Random Cell that is the
                     Column and Row..
 *
 *  @description
 *
 *  @file           : tictacgame.js
 *  @overview       : Program to play a Cross Game or Tic­Tac­Toe Game.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var timer=0;
var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;

function drawBoard() {
    //here drawBoard we use to draw 3*3 grid
    var Parent = document.getElementById("game");
    var counter = 1;

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        var row = document.createElement("tr");

        for (r = 0; r < 3; r++) {
            var col = document.createElement("td");
            col.id = counter;
            col.innerHTML = counter;

            var handler = function(e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function(a, b) { return a - b });
                }

                else {
                    this.innerHTML = "O";
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function(a, b) { return a - b });
                }

                move++;
                var isWin = checkWinner();

                if (isWin)
                {
                    if(currentPlayer == 0)
                        points1++;
                    else
                        points2++;

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("computer").innerHTML = points2;

                    reset();
                    drawBoard();
                }

                else
                {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                    this.removeEventListener('click', arguments.callee);
                }
            };

            col.addEventListener('click', handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }

    loadAnswers();
}

function reset()
{    //reset mode use to play new inning
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
}

function loadAnswers()
{
     /* position of winner in board */
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

function checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var playerSelections = new Array();

    if (currentPlayer == 0)
        playerSelections = player1Selections;
    else
	playerSelections = player2Selections;

    if (playerSelections.length >= size) {
        // check if any 'winners' are also in your selections

        for (i = 0; i < winners.length; i++) {
            var sets = winners[i];  // winning hand
            var setFound = true;

            for (r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, break, not winner
                var found = false;

                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
}

window.onload = drawBoard; //loading window use to drawboard
