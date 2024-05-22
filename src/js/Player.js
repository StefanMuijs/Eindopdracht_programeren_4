import * as ex from "excalibur";
import { Actor, Keys, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';
import { vector } from 'excalibur/build/dist/Util/DrawUtil';

export class Player extends Actor {

    idle
    runLeft
    runRight

    constructor() {
        super({ width: 60, height: 140 })
        const runSheet = ex.SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 4, columns: 6, spriteWidth: 150, spriteHeight: 185 }
        })

        this.idle = ex.Animation.fromSpriteSheet(runSheet, [0], 80)
        this.runLeft = ex.Animation.fromSpriteSheet(runSheet, ex.range(11, 20), 80)
        this.runRight = ex.Animation.fromSpriteSheet(runSheet, ex.range(1, 10), 80)
        let runLeft = this.runRight.clone();
        runLeft.flipHorizontal = true;


        this.body.collisionType = ex.CollisionType.Active
        this.body.limitDegreeOfFreedom = [ex.DegreeOfFreedom.Rotation]

        this.graphics.use(this.idle)

        this.body.useGravity = true;
        // this.body.mass = 7
    }


    onInitialize(engine) {
        this.pos = new Vector(500, 500)
        // this.vel = new Vector(0, 0)
        this.on("collisionstart", () => this.groundCheck())

    }

    groundCheck(){
        this.grounded = true;
    }

    onPreUpdate(engine) {

        let xspeed = 0
        this.graphics.use(this.idle)

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -400
            this.graphics.use(this.runLeft)

        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 400
            this.graphics.use(this.runRight)
        }

        this.vel = new Vector(xspeed, this.vel.y)

        // this.grounded = this.pos.y
        // console.log(this.grounded);

        if (this.grounded) {
            if (engine.input.keyboard.wasPressed(Keys.Space)) {
                // this.vel = new Vector(this.vel.x, this.vel.y - 10000)
                this.body.applyLinearImpulse(new Vector(0, -5000))
                this.grounded = false
            }
        }
    }
}