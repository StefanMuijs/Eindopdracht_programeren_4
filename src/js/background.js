import { Actor, Keys, Sprite, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';

export class Background extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Background,
            // sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        // this.sprite.sourceView.x += .05 * delta;
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            // this.sprite.vel = new Vector(-100, 0);
            this.sprite.sourceView.x += 0.5 * delta;
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Right)) {
            this.sprite.sourceView.x -= 0.5 * delta;
        }
    }


}