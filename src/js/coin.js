import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class Coin extends Actor {
    constructor(x) {
        super({
            width: Resources.Coin.width,
            height: Resources.Coin.height,
            collisionType: CollisionType.Passive
        })

        this.pos = new Vector(
            x,
            200);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Coin.toSprite());
        this.on('collisionstart', (event) => this.kill())
        this.on('collisionstart', (event) => engine.addPoint())
    }

}
