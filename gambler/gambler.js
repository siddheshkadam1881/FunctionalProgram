/**
 * @description -Simulates a gambler who start with $stake and place fair $1 bets until
he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
times he/she wins and the number of bets he/she makes.
 *
 *  @file           : gamblingProcess.js
 *  @overview       :Simulates a gambler who start with $stake and place fair $1 bets until
                    he/she goes broke (i.e. has no money) or reach $goal.
 *  @author         : siddheshwar kadam
 *  @version        :1.0   **/


function gamblingProcess() {
  var stake = parseInt(document.getElementById('num1').value);
  var goal = parseInt(document.getElementById('num2').value);
  var trails = parseInt(document.getElementById('num3').value);
  var beat = 0;
  var bets = 0;
  var wins = 0;

  while (trails != 0) {
    if (Math.random() > 0.5) {
      stake = stake - 1;
      beat = beat + 1;
      bets = bets + 1;
      trails = trails - 1;
    } else {
      stake = stake + 1;
      wins = wins + 1;
      bets = bets + 1;
      trails = trails - 1;
    }
  }
  check(stake, goal, wins, bets, beat, trails);
}

function check(stake, goal, wins, bets, beat, trails) {
  if (stake == goal) {

    document.write("<br>");
    document.write("congratulation you meet your goal <br>");
    document.write("amount of stakes " + stake);
    document.write("<br>");
    document.write("numbers of bets " + bets);
    document.write("<br>");
    document.write("numbers of wins " + wins);
    document.write("<br>");
    document.write("percentage of toal won=" + ((wins * 100) / bets));
  } else if (stake == 0) {
    document.write("<br>");
    document.write("sorry u loss");
    document.write("amount of stakes " + stake);
    document.write("<br>");
    document.write("numbers of bets " + bets);
    document.write("<br>");
    document.write("numbers of loss " + beat);
    document.write("<br>");
    document.write("percentage of toal loss=" + ((beat * 100) / bets));
  } else {
    document.write("<br>");
    document.write("amount of stake" + stake)
    document.write("<br>");
    document.write("number of times won=" + wins);
    document.write("<br>");
    document.write("number of bets=" + bets);
    document.write("<br>");
    document.write("percentage of toal won=" + ((wins * 100) / bets));
  }
}
