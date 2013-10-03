/* James Michiemo, 02OCT2013, The Duel-Part I*/

/* self execution */
(function(){

  /* name players */
  var playerOneName = "Ibuki", playerTwoName = "Blanka", playerOneHealth = 100, playerTwoHealth = 100, playerOneDamage = 50, playerTwoDamage = 50, round = 0;

  /* use the alert function to advance rounds and display remaining health and round number*/
  function fight(){
    alert(playerOneName + ":" + playerOneHealth + "  VS  " + playerTwoName + ":" + playerTwoHealth);
    for (var i = 0; i < 10; i++)
    { 
      /* instantiate damage */
      var minDmg1 = playerOneDamage * .5,
          minDmg2 = playerTwoDamage * .5,
          hit1 = Math.floor(Math.random()*(playerOneDamage-minDmg1)+minDmg1),
          hit2 = Math.floor(Math.random()*(playerTwoDamage-minDmg2)+minDmg2);

      /* execute damage */
      playerOneHealth-=hit1;
      playerTwoHealth-=hit2;

      /* check for KO */
      var result = checkKO();
      if (result === "noKO")
      {
        round++;
        alert(playerOneName + ":" + playerOneHealth + "     =====Round " + round + "! Fight!=====     " + playerTwoName + ":" + playerTwoHealth);
      } else
      {
        alert(result);
        break;
      };
    };
  };

  function checkKO(){
    var result = "noKO";
    if (playerOneHealth < 1 && playerTwoHealth < 1)
    {
      result = "Draw!";
    } else if (playerOneHealth < 1)
    {
      result = playerTwoName + " Wins!";
    } else if (playerTwoHealth < 1)
    {
      result = playerOneName + " Wins!";
    };
    return result;
  };

  fight();

})();
