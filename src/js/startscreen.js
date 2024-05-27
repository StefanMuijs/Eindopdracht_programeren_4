import { Scene, Sprite } from "excalibur";
import { Resources } from "./resources";

export class Startscreen extends Scene {

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Startscreen,
            // sourceView: { x: 0, y: 0, width: engine.drawWidth * 5, height: engine.drawHeight }
        })
        // this.anchor = Vector.Zero
        // this.graphics.use(this.sprite)
        // this.pos.x = -engine.drawWidth;
        // this.body.collisionType = CollisionType.PreventCollision;
    }
}