import * as ex from "excalibur";
import { Actor, Keys, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';
import { vector } from 'excalibur/build/dist/Util/DrawUtil';

export class Player extends Actor {

    idle
    runLeft
    runRight

    constructor() {
        super()
        const runSheet = ex.SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 4, columns: 6, spriteWidth: 150, spriteHeight: 185 }
        })

        this.idle = ex.Animation.fromSpriteSheet(runSheet, [0], 80)
        this.runLeft = ex.Animation.fromSpriteSheet(runSheet, ex.range(11, 20), 80)
        this.runRight = ex.Animation.fromSpriteSheet(runSheet, ex.range(1, 10), 80)
        let runLeft = this.runRight.clone();
        runLeft.flipHorizontal = true;

        // this.graphics.add("idle", idle)
        // this.graphics.add("runleft", runLeft)
        // this.graphics.add("runright", runRight)

        this.graphics.use(this.idle)
    }


    onInitialize(engine) {
        this.pos = new Vector(500, 500)
        this.vel = new Vector(0, 0)

    }
    onPreUpdate(engine) {

        let xspeed = 0
        this.graphics.use(this.idle)

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -0
            this.graphics.use(this.runLeft)

        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 0
            this.graphics.use(this.runRight)
        }

        this.vel = new Vector(xspeed, 0)
    }

}
const runSheet = ex.SpriteSheet.fromImageSource({
    image: Resources.Player,
    grid: { rows: 2, columns: 7, spriteWidth: 1047, spriteHeight: 380 }
})
