import { Actor, CollisionType, Keys, Sprite, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';

export class Background extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth * 3, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.pos.x = -engine.drawWidth;
        // this.body.collisionType = CollisionType.PreventCollision;
    }

    onPostUpdate(engine){
        if(engine.player.pos.x > this.pos.x + 2 * engine.drawWidth){
            this.pos.x += engine.drawWidth;
        }

    }

}