import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"
import { Obstacle } from "./obstacle";

export class Trashcan extends Obstacle{
  constructor(x) {
      
      super(x, Resources.Trashcan);
    }
}

