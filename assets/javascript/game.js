window.onload = function() 
{ 
  // use detach

 var obi = { name:"obi", health:170, attack:40, counterAttack:20, level:1};
 var luke = { name:"luke", health:170, attack:40, counterAttack:20, level:1};
 var sid= { name:"sidous", health:170, attack:40, counterAttack:20, level:1};
 var maul = { name:"maul", health:170, attack:40, counterAttack:20, level:1};
  		 	 

  var heroChosen = false;
  var enemyChosen = false;
  var hero = {};
  var enemy = {};
  var enemiesKilled = 0;
  
 
  $("#attack").hide(); 
  $('#obi').on("click", obiClick);
  $('#luke').on("click",lukeClick);
  $('#sid').on("click", sidClick);
  $('#maul').on("click", sidClick);

 	
 // attack button  .fadeOut( "slow" );
 $('#attack').on("click", function(event) 
 {

 	console.log("the enemy is " + enemy.name);
 	console.log("the hero is " + hero.name);
 
     enemy.health = enemy.health - attackPower(hero.attack);
  	 console.log("enemy health " + enemy.health);
  	 $('.ChooseEnemy').fadeTo(100, 0.5, function() { $('.ChooseEnemy').fadeTo(80, 1); });
  	 // strobe enemy
  	 hero.health = hero.health - counterAttackPower(enemy.counterAttack);
  	 $('.heroChoose').fadeTo(100, 0.5, function() { $('.heroChoose').fadeTo(80, 1); });
     console.log("hero health " + hero.health);
     
  	 if(enemy.health < 1)
  	 {
  	 	console.log("u won pick another enemy");
  	    $(".character").on('click',obiClick);
  	    $(".character").on('click',maulClick);
  	    $(".character").on('click',lukeClick);
  	    $(".character").on('click',sidClick);

  	 	enemyChosen = false;
  	 	console.log(enemyChosen);
  	 	$("#attack").hide();
  	 	hero.level ++;
  	 	console.log("hero level" + hero.level);
  	 	console.log("enemy.name " + enemy.name);
  	 	enemiesKilled ++;
        console.log("before starwars if startment")
  	 	if(enemy.name === "sidous")
  	 	{
  	 			$('#sid').remove();
  	 			console.log("inside sids if statement");
  	 			//$(".character").on('click');
  	 	}	
  	 	else if(enemy.name === "obi")
  	 	{
  	 			$('#obi').remove();
  	 			console.log("inside obi if statement");
  	 			//$(".character").on('click');
  	 	}	
  	 	else if(enemy.name === "luke")
  	 	{
  	 			$('#luke').remove();
  	 			console.log("inside luke if statement");
  	 			// $(".character").on('click');
  	 	}	
  	 	else if(enemy.name === "maul")
  	 	{
  	 			$('#maul').remove();
  	 			console.log("inside darths if statement");
  	 			// $(".character").on('click');
  	 	}
  	 	else
  	 	{
  	 		console.log("no one");
  	 	}	
  	 	 
  	 	
  	 	if(enemiesKilled === 3)
  	 	{
  	 		console.log("you won the game!");
  	 	}
  	 }

     if(hero.health < 1)
     {
     	console.log("u lost");
        // 
    	resetGame();
      }	   
 });
   
  function attackPower(a)
  {
     a = hero.level * (a * Math.random());
     return a;
  }
  function counterAttackPower(c)
  {
    c = c * Math.random();
    return c; 
  }
  
 function levelUp()
 {
 	hero.level ++;
 	hero.attack = hero.attack + (hero.attack + Math.random);

 }

 function resetGame()
 {
 	hero = {};
 	enemy = {};
    heroChosen = false;
    enemyChosen = false;
    var o = $("#obi").detach();
    o.appendTo(".character");
    var l = $("#luke").detach();
    l.appendTo(".character");
    var s = $( "#sid" ).detach();
	s.appendTo(".character");
    var m = $( "#maul" ).detach();
	m.appendTo(".character");
 }

 function obiClick(event)
 {
 	if(heroChosen == true && enemyChosen == true)
 	{
 		$(".character").off('click');
 	}
 	else if(heroChosen === false)
 	 {
	     console.log("hero = obi");
	     hero = $.extend(true, {}, obi);// clones obi object
	     console.log(hero.health);
	     heroChosen = true;
	     $("#obi").off('click');
	     var o = $("#obi").detach();
	     o.appendTo(".heroChoose");

	     var l = $( "#luke" ).detach();
	     l.appendTo(".enemyChoices");
	     var s = $( "#sid" ).detach();
	     s.appendTo(".enemyChoices");
	     var m = $( "#maul" ).detach();
	     m.appendTo(".enemyChoices");
      }
    else if(heroChosen == true)
      {
      	 console.log("obi is enemy");
         enemy = $.extend(true, {}, obi);
         enemyChosen = true;
         $("#obi").off('click');
         var o = $("#obi").detach();
	     o.appendTo(".ChooseEnemy");
	     $(".character").off('click');
	     // make button appear $("#results").show();
	      $("#attack").show();
      }
 }
 function lukeClick(event)
 {
 	if(heroChosen == true && enemyChosen == true)
 	{
 		$(".character").off('click');
 	}
    else if(heroChosen === false)
 	 {
	     console.log("hero = luke");
	     hero = $.extend(true, {}, luke);// clones obi object
	     console.log(hero.health); // 
	     heroChosen = true;
	     $("#luke").off('click');  // turn of click so cant chose enemy
	     // puts luke div to heroChoose
	     var l = $( "#luke" ).detach();
	     l.appendTo(".heroChoose");
         // puts everyone else in enemyChoices
	     var o = $("#obi").detach();
	     o.appendTo(".enemyChoices");
	     var s = $( "#sid" ).detach();
	     s.appendTo(".enemyChoices");
	     var m = $( "#maul" ).detach();
	     m.appendTo(".enemyChoices");
      }
     else  if(heroChosen == true)
      {
      	 console.log("luke is enemy");
         enemy = $.extend(true, {}, luke);
         enemyChosen = true;
         $("#luke").off('click');
        
         var o = $("#luke").detach();
	     o.appendTo(".ChooseEnemy");
	     $(".character").off('click');
	     $("#attack").show();
      }
      else if(enemyChosen === true && heroChosen == true)
      {
      	console.log("already picked a hero/ememy");
      }
 }
 function sidClick(event)
 {
 	if(heroChosen == true && enemyChosen == true)
 	 {
 		$(".character").off('click');
 	 }
    else if(heroChosen === false)
 	 {
	     console.log("hero = sid");
	     hero = $.extend(true, {}, sid);// clones obi object
	     console.log(hero.health); // 
	     heroChosen = true;
	     $("#sid").off('click');  // turn of click so cant chose enemy
	     // puts luke div to heroChoose
	     var s = $( "#sid" ).detach();
	     s.appendTo(".heroChoose");
         // puts everyone else in enemyChoices
	     var o = $("#obi").detach();
	     o.appendTo(".enemyChoices");
	     var l = $( "#luke" ).detach();
	     l.appendTo(".enemyChoices");
	     var m = $( "#maul" ).detach();
	     m.appendTo(".enemyChoices");
      }
     else  if(heroChosen == true )
      {
      	 console.log("sid is enemy");
         enemy = $.extend(true, {}, sid);
         enemyChosen = true;
         $("#sid").off('click');
        
         var o = $("#sid").detach();
	     o.appendTo(".ChooseEnemy");
	     $("#attack").show();
	      $(".character").off('click');
      }
      else{
      	console.log("already picked a hero/ememy");
      }
 }
 
 function maulClick(event)
 {
     if(heroChosen == true && enemyChosen == true)
 	 {
 		$(".character").off('click');
 	 }
     else  if(heroChosen === false)
 	 {
	     console.log("hero = maul");
	     hero = $.extend(true, {}, maul);// clones obi object
	     console.log(hero.health); // 
	     heroChosen = true;
	     $("#maul").off('click');  // turn of click so cant chose enemy
	     // puts luke div to heroChoose
	     var m = $( "#maul" ).detach();
	     m.appendTo(".heroChoose");
         // puts everyone else in enemyChoices
	     var o = $("#obi").detach();
	     o.appendTo(".enemyChoices");
	     var l = $( "#luke" ).detach();
	     l.appendTo(".enemyChoices");
	     var s = $( "#sid" ).detach();
	     s.appendTo(".enemyChoices");
	 
      }
    else if(heroChosen == true)
      {
      	 console.log("maul is enemy");
         enemy = $.extend(true, {}, maul);
         enemyChosen = true;
         $("#maul").off('click');

         var o = $("#maul").detach();
	     o.appendTo(".ChooseEnemy");
	     $(".character").off('click');
	     $("#attack").show();
      }
      else{
      	console.log("already picked a /ememy");
      }

 }
 
}