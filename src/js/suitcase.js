import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Trashcan } from "./trashcan";
import { Obstacle } from "./obstacle";

export class Suitcase extends Obstacle{
    constructor(x) {
        
        super(x, Resources.Suitcase);
      }
}