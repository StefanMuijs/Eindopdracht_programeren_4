import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Trashcan } from "./trashcan";

export class Obstacle extends Actor {

  resource
  constructor(x, resource) {

    super({
      width: resource.width,
      height: resource.height,
      collisionType: CollisionType.Fixed
    })
    this.pos = new Vector(
      x,
      525);

    this.resource = resource;
  }

  onInitialize(x) {
    this.graphics.use(this.resource.toSprite());
  }
}