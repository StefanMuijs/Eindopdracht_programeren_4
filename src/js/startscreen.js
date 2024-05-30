import { Actor, CollisionType, Keys, Scene, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";
import { Startscreenbg } from "./startscreenbg";
import { StartButton } from "./startbutton";
import { Level1 } from "./level1";

export class Startscreen extends Scene {

    constructor(){
        super()
    }

    onInitialize(engine) {
      const background = new Startscreenbg();
      this.add(background);

      const startbutton = new StartButton();
      this.add(startbutton);
      
    }

    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)){
            this.engine.goToScene('Level1')
        }
}
}