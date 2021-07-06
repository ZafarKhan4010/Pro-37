var canva;
var gameState;
var contestantCount;
var database;
var quiz;
var question;
var contestants;

function setup(){
  canvas = createCanvas(850,500);
  database=firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
  quiz= new Question();
  
}

function draw(){
  background("Violet");

  if(contestantCount === 4){
    quiz.update(1);
  }
if(gameState===1){
  clear();
  quiz.play();
  }
  
}