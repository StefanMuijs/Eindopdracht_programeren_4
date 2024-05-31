import { Actor, CollisionType, Scene, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Endscreenbg extends Actor {

    sprite;

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Endscreenbg,
            sourceView: {
                x: 0,
                y: 0,
                width: engine.drawWidth,
                height: engine.drawHeight
            },
        });
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}