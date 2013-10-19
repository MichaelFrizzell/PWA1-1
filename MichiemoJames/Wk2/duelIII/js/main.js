/* James Michiemo, 08OCT2013, The Duel-Part III*/

/* self execution */
(function(){

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
    round = 1,
    playerOneHP = document.querySelector('#kabal p'),
    playerTwoHP = document.querySelector('#kratos p'),
    commandText = document.querySelector('#round'),
    fightButton = document.querySelector('.buttonblue');


  playerOneHP.innerHTML = fighters[0].health;
  playerTwoHP.innerHTML = fighters[1].health;
  commandText.innerHTML = "Click To Start Fight " + round + "!";

  fightButton.onclick = function(){
    round++;
    playerOneHP.innerHTML = fighters[0].health;
    playerTwoHP.innerHTML = fighters[1].health;
    commandText.innerHTML = "Click To Start Fight " + round + "!";
    console.log(fighters[0].name + ":" + fighters[0].health + "  VS  " + fighters[1].name + ":" + fighters[1].health);
    
      /* instantiate damage */
      var minDmg1 = fighters[0].damage * .5,
          minDmg2 = fighters[1].damage * .5,
          hit1 = ~~(Math.random()*(fighters[0].damage-minDmg1)+minDmg1),
          hit2 = ~~(Math.random()*(fighters[1].damage-minDmg2)+minDmg2);

      /* execute damage */
      fighters[0].health-=hit1;
      fighters[1].health-=hit2;

      winnerCheck();

      /* check for KO */
      var result = winnerCheck();
      if (result === "noKO")
      {
        console.log(fighters[0].name + ":" + fighters[0].health + "     =====Round " + round + "! Fight!=====     " + fighters[1].name + ":" + fighters[1].health);
      } else
      {
        fightButton.onclick = null; // remove event after win
        commandText.innerHTML = result;
      };

  function winnerCheck(){
    var result = "noKO";
    if (fighters[0].health < 1 && fighters[1].health < 1)
    {
      result = "Both Fighters Die";
    } else if (fighters[1].health < 1)
    {
      result = fighters[0].name + " Wins!";
    } else if (fighters[0].health < 1)
    {
      result = fighters[1].name + " Wins!";
    };
    return result;
  };
  };
})();
