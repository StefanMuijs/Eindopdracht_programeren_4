import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Barrier extends Actor {


  constructor(engine, x) {
    super({
      width: Resources.Barrier.width,
      height: 1000,

      // pos: new Vector(
      //   x,
      //   500),

      collisionType: CollisionType.Fixed

    })
  }

  onInitialize(x) {
    console.log("Barrier created");


    this.graphics.use(Resources.Barrier.toSprite());
  }



}
