class Game {
    constructor() {
        this.leadeboardTitle = createElement("h2");
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
    }

    getState() {
     var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
     }

        start() {
            player = new Player();
            playerCount = player.getCount();

            form = new Form();
            form.display();



        
          
        }
}