let team1Score = 0;
let team2Score = 0;
let team1Array = [];
let team2Array = [];
let ballCountBalanceT1 = 18;
let ballCountBalanceT2 = 18;
let ballScore;
let players = ["player1", "player2", "player3", "player4", "player5"];
let outCountT1 = 0;
let outCountT2 = 0;

document.getElementById("team1ScoreCard").value = 0;
document.getElementById("team2ScoreCard").value = 0;

let batTeam1 = () => {
  if (outCountT1 == 5 || ballCountBalanceT1 == 0) {
    document.getElementById("team1Bat").disabled = true;
    document.getElementById("team2Bat").removeAttribute("disabled");
    return;
  } else {
    if (ballCountBalanceT1 != 0) {
      ballScore = Math.floor(Math.random() * 7);
      console.log(ballScore);
      team1Array.push(ballScore);
      document.getElementById(players[outCountT1] + "t1").value +=
        ballScore + " ";
      if (ballScore == 0) {
        outCountT1++;
      }
      ballCountBalanceT1--;
      team1Score = team1Array.reduce(
        (initVal, currVal) => initVal + currVal,
        0
      );
      document.getElementById("team1ScoreCard").value = team1Score;
    }
  }
  let team1obj = {
    team1Score,
    player1Score: document.getElementById("player1t1").value,
    player2Score: document.getElementById("player2t1").value,
    player3Score: document.getElementById("player3t1").value,
    player4Score: document.getElementById("player4t1").value,
    player5Score: document.getElementById("player5t1").value
  };
  localStorage.setItem("team1score", JSON.stringify(team1obj));
};

let batTeam2 = () => {
  if (outCountT2 == 5 || ballCountBalanceT2 == 0) {
    document.getElementById("team2Bat").disabled = true;
    window.open("./result.html", "_blank");
    return;
  } else {
    if (ballCountBalanceT2 != 0) {
      ballScore = Math.floor(Math.random() * 7);
      console.log(ballScore);
      team2Array.push(ballScore);
      document.getElementById(players[outCountT2] + "t2").value +=
        ballScore + " ";
      if (ballScore == 0) {
        outCountT2++;
      }
      ballCountBalanceT2--;
      team2Score = team2Array.reduce(
        (initVal, currVal) => initVal + currVal,
        0
      );
      document.getElementById("team2ScoreCard").value = team2Score;
    }
  }
  let team2obj = {
    team2Score,
    player1Score: document.getElementById("player1t2").value,
    player2Score: document.getElementById("player2t2").value,
    player3Score: document.getElementById("player3t2").value,
    player4Score: document.getElementById("player4t2").value,
    player5Score: document.getElementById("player5t2").value
  };
  localStorage.setItem("team2score", JSON.stringify(team2obj));
};
