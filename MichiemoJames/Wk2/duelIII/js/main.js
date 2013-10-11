/* James Michiemo, 08OCT2013, The Duel-Part III*/

/* self execution */
(function(){

  /* name players */
  /*var playerOne[0] = "Ibuki", playerTwo[0] = "Blanka", playerOne[1] = 300, playerTwo[1] = 300, playerOne[2] = 50, playerTwo[2] = 50, round = 0;*/
  /*var playerOne = ["Ibuki", 300, 50], playerTwo = ["Blanka", 300, 50], round = 0;*/
  var fighters = [
    playerOne = {
      name: "Ibuki",
      health:300,
      damage:50
    },
    playerTwo = {
      name: "Blanka",
      health:300,
      damage:50
    }
  ],
    round = 0;


  var playerOneHP = document.querySelector('#kabal p');

  var playerTwoHP = document.querySelector('#kratos p');

  playerOneHP.innerHTML = fighters[0].health;
  playerTwoHP.innerHTML = fighters[1].health;

  function fight(){
    console.log(fighters[0].name + ":" + fighters[0].health + "  VS  " + fighters[1].name + ":" + fighters[1].health);
    
    for (var i = 0; i < 10; i++)
    { 
      /* instantiate damage */
      var minDmg1 = fighters[0] * .5,
          minDmg2 = fighters[0] * .5,
          hit1 = ~~(Math.random()*(fighters[0].damage-minDmg1)+minDmg1),
          hit2 = ~~(Math.random()*(fighters[1].damage-minDmg2)+minDmg2);

      /* execute damage */
      fighters[0].health-=hit1;
      fighters[1].health-=hit2;

      /* check for KO */
      var result = winnerCheck();
      if (result === "noKO")
      {
        round++;
        console.log(fighters[0].name + ":" + fighters[0].health + "     =====Round " + round + "! Fight!=====     " + fighters[1].name + ":" + fighters[1].health);
      } else
      {
        console.log(result);
        break;
      };
    };
  };

  function winnerCheck(){
    var result = "noKO";
    if (fighters[0].health < 1 && fighters[1].health < 1)
    {
      result = "Draw!";
    } else if (fighters[1].health < 1)
    {
      result = fighters[0].name + " Wins!";
    } else if (fighters[0].health < 1)
    {
      result = fighters[1].name + " Wins!";
    };
    return result;
  };

  fight();

})();
