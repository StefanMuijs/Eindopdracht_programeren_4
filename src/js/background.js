import { Actor, CollisionType, Keys, Sprite, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';

export class Background extends Actor {

    level1

    constructor() {

        super({
            z: -2
        })

        // this.level1 = scene;
    }

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth * 5, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.pos.x = -engine.drawWidth;
    }

    onPostUpdate(engine) {
        let playerpos = this.scene?.player?.pos

        if (playerpos) {
            if (playerpos.x > this.pos.x + 3 * engine.drawWidth) {
                this.pos.x += engine.drawWidth;
            }

            if (playerpos.x < this.pos.x + 3 * engine.drawWidth) {
                this.pos.x -= engine.drawWidth;
            }
        }


    }

}