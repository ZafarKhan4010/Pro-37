class Quiz{
   constructor(){}

    getState(){
    
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        })
    }

    update(state){
      database.ref('/').update({
        gameState : state
      });
    }    

   async start(){
       if(gameState===0){
        contestanst = new contestant();
        var contestantCountRef = await database.ref ('contestantCount').once("value");
        if(contestantCountRef.exists()){
           contestantCount = contestantCountRef.val();
             contestanst.getCount();
        }
          question=new Question();
          question.display();
       }
   }

   play(){
   question.hide();
   background("maroon");
   fill(0);
   textSize(30);
   text("Result Of The Quiz");
   text("---------------------- 320,65");  
   contestant.getPlayerInfo();
   if(allContestants !==undefined){
       debugger;
       var display_Answers=230;
       fill("Blue");
       textSize(20);
       text("*NOTE: Contestants Who Answered Correct will Be Highlighted in green color!",130,230);
 
       for(var plr in allContestants){
             debugger;
             var CorrectAns="3";
             if(CorrectAns === allContestants[plr].answer)
             fill("Green");
             else
             fill("Red");

             display_Answers+=30;
             textSize(20);
             text(allContestants[plr].name + ":" +allContestants[plr].answer,250,display_Answers )
       }
     }  
   }
 }