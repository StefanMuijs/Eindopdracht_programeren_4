import { Actor, CollisionType, Vector } from "excalibur";

export class Ground extends Actor{

    constructor(engine) {
        super({
          width: 2000,
          height: 10,

          collisionType: CollisionType.Fixed
        })
      }

      onInitialize() {
        console.log("ground created");

        this.pos = new Vector(
            450,
            570);
     }
}