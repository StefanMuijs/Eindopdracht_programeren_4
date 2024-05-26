import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Trashcan extends Actor {
  constructor(x) {
    super({
      width: Resources.Trashcan.width,
      height: Resources.Trashcan.height,
      collisionType: CollisionType.Fixed
    })
    this.pos = new Vector(
      x,
      525);
  }

  onInitialize(x) {
    console.log("Trashcan created");

    this.graphics.use(Resources.Trashcan.toSprite());
  }

}
