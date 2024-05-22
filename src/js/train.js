import { Actor, Keys, Rectangle, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';

export class Train extends Actor {
    // constructor(x, y) {
    //     super({ x, y, width: Resources.Train.width, height: Resources.Train.height })
    // }

    velX = 0

    onInitialize(engine) {

        // let randomNumber = Math.floor(Math.random() * 3);
        let randomNumber = 0
        console.log(randomNumber);

        if (randomNumber === 0) {
            this.graphics.use(Resources.Train.toSprite())
            this.velX = Math.random()

            this.pos = new Vector(3880, 358)
        }

        if (randomNumber === 1) {
            this.graphics.use(Resources.Train.toSprite())
            this.vel = new Vector(Math.random() * 400 - 630, 0)

            this.scale = new Vector(0.6, 0.6)
            this.pos = new Vector(3880, 312)
        }

        if (randomNumber === 2) {
            this.graphics.use(Resources.Train.toSprite())
            this.vel = new Vector(Math.random() * 400 - 630, 0)

            this.scale = new Vector(0.3, 0.3)
            this.pos = new Vector(3880, 265)
        }

    }

    onPostUpdate(engine, delta) {
        // this.sprite.sourceView.x += .05 * delta;
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            // this.sprite.vel = new Vector(-100, 0);
            this.pos.x -= 0.5 * delta;
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Right)) {
            this.pos.x += 0.5 * delta;
        }

        this.pos.x -= this.velX * delta;
    }

}