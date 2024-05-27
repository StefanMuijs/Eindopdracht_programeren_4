import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Coin extends Actor {
    constructor(x,y) {
        super({
            width: Resources.Coin.width,
            height: Resources.Coin.height,
            collisionType: CollisionType.Passive
        })

        this.pos = new Vector(
            x,
            y);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Coin.toSprite());
        this.on('collisionstart', (event) => this.kill())
        this.on('collisionstart', (event) => engine.addPoint())
    }

}
