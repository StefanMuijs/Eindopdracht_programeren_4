import { Actor, Keys, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';

// export class Background extends Actor {

//     sprite

//     onInitialize(engine) {
//         this.sprite = new Sprite({
//             image: Resources.Background,
//             sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
//         })
//         this.anchor = Vector.Zero
//         this.graphics.use(this.sprite)
//     }

//     onPostUpdate(engine, delta) {
//         this.sprite.sourceView.x += .05 * delta;
//     }
// }

export class Background extends Actor {

    // sprite

    onInitialize(engine) {
        // this.graphics.use(Resources.Background.toSprite());

        let sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(sprite)
    }
}