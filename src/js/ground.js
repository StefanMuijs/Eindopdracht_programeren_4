import { Actor, CollisionType, Vector } from "excalibur";

export class Ground extends Actor {

  constructor(engine) {
    super({
      width: 10000,
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

  onPostUpdate(engine) {
    if (engine.player.pos.x > this.pos.x + 2 * engine.drawWidth) {
      this.pos.x += engine.drawWidth;
    }

    if (engine.player.pos.x < this.pos.x + 2 * engine.drawWidth) {
      this.pos.x -= engine.drawWidth;
    }

  }
}