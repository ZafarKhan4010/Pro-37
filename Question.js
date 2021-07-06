class Question{
    constructor(){
        this.tittle= createElement('h1')
        this.input1= createInput("Enter Your Name Here....");
        this.input2= createInput("Enter Correct Option No..");
        this.button=createButton('Submit');
        this.Question=createElement('h3');
        this.option1=createElement('h4');
        this.option2=createElement('h4');
        this.option3=createElement('h4');
        this.option4=createElement('h4');
    }

    hide(){
        this.tittle.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }

    display(){
  this.tittle.html("My Quiz Game");
  this.tittle.position(350,0);


  this.Question.html("Question:- What is Prince Williams Full Name");
  this.Question.position("150,80");

  this.option1.html("Liam");
  this.option1.position(150,100);

  this.option2.html("Willie");
  this.option2.position(150,120);

  this.option3.html("William Arthur Philip Louis Windsor")
  this.option3.position(150,140);

  this.option4.html("William Shakespeare");
  this.option4.position(150,160);

  this.input1.position(150,230);
  this.input2.position(350,230);
  this.button.position(290,300);

  this.button.mousePressed(()=>{
         this.tittle.hide();
         this.input1.hide();
         this.input2.hide();
         this.button.hide();
         contestent.name= this.input1.value();
         contestent.answer= this.input2.value();
         contestentCount+1;
         contestent.index = contestentCount;
         contestent.update();
         contestent.updateCount(contestentCount);
       }); 
    }
}