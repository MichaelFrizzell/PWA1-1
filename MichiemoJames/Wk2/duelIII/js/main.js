/* James Michiemo, 08OCT2013, The Duel-Part III*/

/* self execution */
(function(){

  /* name players */
  /*var playerOne[0] = "Ibuki", playerTwo[0] = "Blanka", playerOne[1] = 300, playerTwo[1] = 300, playerOne[2] = 50, playerTwo[2] = 50, round = 0;*/
  /*var playerOne = ["Ibuki", 300, 50], playerTwo = ["Blanka", 300, 50], round = 0;*/
  var fighters = [
    playerOne = {
      name: "Ibuki",
      damage:300,
      health:50
    },
    playerTwo = {
      name: "Blanka",
      damage:300,
      health:50
    }
  ],
    round = 0;

  function fight(){
    
    for (var i = 0; i < 10; i++)
    { 
      /* instantiate damage */
      var minDmg1 = playerOne[2] * .5,
          minDmg2 = playerTwo[2] * .5,
          hit1 = Math.floor(Math.random()*(playerOne[2]-minDmg1)+minDmg1),
          hit2 = Math.floor(Math.random()*(playerTwo[2]-minDmg2)+minDmg2);

      /* execute damage */
      playerOne[1]-=hit1;
      playerTwo[1]-=hit2;

      /* check for KO */
      var result = winnerCheck();
      if (result === "noKO")
      {
        round++;
      } else
      {
        break;
      };
    };
  };

  function winnerCheck(){
    var result = "noKO";
    if (playerOne[1] < 1 && playerTwo[1] < 1)
    {
      result = "Draw!";
    } else if (playerOne[1] < 1)
    {
      result = playerTwo[0] + " Wins!";
    } else if (playerTwo[1] < 1)
    {
      result = playerOne[0] + " Wins!";
    };
    return result;
  };

  fight();

})();
