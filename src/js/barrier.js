import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Barrier extends Actor{
    constructor(engine) {
        super({
          width: Resources.Barrier.width,
          height: engine.drawHeight,

          collisionType: CollisionType.Fixed
        })
      }

      onInitialize() {
        console.log("Barrier created");

        this.pos = new Vector(
            50,
            500);

        this.graphics.use(Resources.Barrier.toSprite());
}

}
