import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Trashcan } from "./trashcan";

export class Bench extends Actor{
    constructor(x) {
        
        super({
          width: Resources.Bench.width,
          height: Resources.Bench.height,
          collisionType: CollisionType.Fixed
        })
        this.pos = new Vector(
          x,
          525);
      }

    onInitialize(x) {
        console.log("Bench created");
    
        this.graphics.use(Resources.Bench.toSprite());
      }
}