import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Trashcan extends Actor{
    constructor() {
        super({
          width: Resources.Trashcan.width,
          height: Resources.Trashcan.height,
          collisionType: CollisionType.Fixed
        })
      }

      onInitialize() {
        console.log("Trashcan created");

        this.pos = new Vector(
            1180,
            525);

        this.graphics.use(Resources.Trashcan.toSprite());
}

}
