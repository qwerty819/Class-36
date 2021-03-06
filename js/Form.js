class Form{
    constructor(){
        this.input = createInput("Insert Name"); 
        this.button = createButton("PLAY");
        this.greeting =  createElement("h3");
        this.reset = createButton("RESET");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACING GAME");
        title.position(windowWidth/2+400,0);
        this.input.position(windowWidth/2+450,windowHeight/2-400);
        this.button.position(windowWidth/2+500,windowHeight/2-200);
        this.reset.position(windowWidth,windowHeight/2-400);
     

          this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.updateName();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(windowWidth/2+450,windowHeight/2-200);
          });

          this.reset.mousePressed(()=>{
            gameState=0;
            game.update(0);
            player.updateCount(0);
            Player.updateCarsAtEnd(0);
          });

    }

}
/*button.mousePresssed( ()=>{
//action
}){

}
function reset(){
//action
}*/