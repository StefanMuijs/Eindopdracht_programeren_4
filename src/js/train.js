import { Actor, Keys, Rectangle, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';

export class Train extends Actor {

    onInitialize(engine) {

        this.graphics.use(Resources.Train.toSprite())
        this.vel = new Vector(Math.random() * 400 - 630, 0)

        this.pos = new Vector(3880, 358)
        console.log(this.vel)

    }

}