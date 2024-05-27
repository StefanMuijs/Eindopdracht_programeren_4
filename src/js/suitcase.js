import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Trashcan } from "./trashcan";

export class Suitcase extends Actor{
    constructor(x) {
        
        super({
          width: Resources.Suitcase.width,
          height: Resources.Suitcase.height,
          collisionType: CollisionType.Fixed
        })
        this.pos = new Vector(
          x,
          525);
      }

    onInitialize(x) {
        console.log("suitcase created");
    
        this.graphics.use(Resources.Suitcase.toSprite());
      }
}