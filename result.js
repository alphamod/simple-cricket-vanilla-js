let result = callback => {
  let team1Score = localStorage.getItem("team1score");
  let team2Score = localStorage.getItem("team2score");
  team1Score = JSON.parse(team1Score);
  team2Score = JSON.parse(team2Score);
  callback(team1Score, team2Score);
};

let mycallback = (score1, score2) => {
    let manOfTheMatch;
  document.getElementById("team1score").innerText = score1.team1Score;
  document.getElementById("team2score").innerText = score2.team2Score;
  let MOM = [];
  MOM.push(
    score1.player1Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score1.player2Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score1.player3Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score1.player4Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score1.player5Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score2.player1Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score2.player2Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score2.player3Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score2.player4Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  MOM.push(
    score2.player5Score
      .split(" ")
      .map(ele => {
        return parseInt(ele);
      })
      .filter(Boolean)
      .reduce((curr, pre) => curr + pre, 0)
  );
  document.getElementById("player1ScoreT1").innerText = score1.player1Score;
  document.getElementById("player2ScoreT1").innerText = score1.player2Score;
  document.getElementById("player3ScoreT1").innerText = score1.player3Score;
  document.getElementById("player4ScoreT1").innerText = score1.player4Score;
  document.getElementById("player5ScoreT1").innerText = score1.player5Score;
  document.getElementById("player1ScoreT2").innerText = score2.player1Score;
  document.getElementById("player2ScoreT2").innerText = score2.player2Score;
  document.getElementById("player3ScoreT2").innerText = score2.player3Score;
  document.getElementById("player4ScoreT2").innerText = score2.player4Score;
  document.getElementById("player5ScoreT2").innerText = score2.player5Score;
  console.log(MOM);
  let manOfTheMatchInd = MOM.indexOf(Math.max.apply(null,MOM));
    console.log(manOfTheMatchInd);
    
    if (manOfTheMatchInd == 0) {
        manOfTheMatch = "Player1 of Team 1"
    }else if (manOfTheMatchInd == 1) {
        manOfTheMatch = "Player2 of Team 1"
    }else if (manOfTheMatchInd == 2) {
        manOfTheMatch = "Player3 of Team 1"
    }else if (manOfTheMatchInd == 3) {
        manOfTheMatch = "Player4 of Team 1"
    }else if (manOfTheMatchInd == 4) {
        manOfTheMatch = "Player5 of Team 1"
    }else if (manOfTheMatchInd == 5) {
        manOfTheMatch = "Player1 of Team 2"
    }else if (manOfTheMatchInd == 6) {
        manOfTheMatch = "Player2 of Team 2"
    }else if (manOfTheMatchInd == 7) {
        manOfTheMatch = "Player3 of Team 2"
    }else if (manOfTheMatchInd == 8) {
        manOfTheMatch = "Player4 of Team 2"
    }else if (manOfTheMatchInd == 9) {
        manOfTheMatch = "Player1 of Team 2"
    }

    document.getElementById("manOfTheMatch").innerHTML= `<h3>Man Of the Match is  ${manOfTheMatch}</h3>`
    if (score1.team1Score > score2.team2Score) {
        document.getElementById("winningTeam").innerText="Winner is Team 1"
    } else {
        document.getElementById("winningTeam").innerText="Winner is Team 2"
    }
};

result(mycallback);
