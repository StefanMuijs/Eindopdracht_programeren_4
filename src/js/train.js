import { Actor, Keys, Rectangle, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';

export class Train extends Actor {
    constructor(x, y) {
        super({ x, y, width: Resources.Train.width, height: Resources.Train.height })
    }

    onInitialize(engine) {

        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);

        if (randomNumber === 0) {
            this.graphics.use(Resources.Train.toSprite())
            this.vel = new Vector(Math.random() * 400 - 630, 0)

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

}