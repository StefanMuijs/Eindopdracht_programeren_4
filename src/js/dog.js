import { Actor, Keys, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';
import { vector } from 'excalibur/build/dist/Util/DrawUtil';

export class Dog extends Actor {
    
    constructor() {
        super({
            width: Resources.Dog.width, 
            height: Resources.Dog.height })
    }

    onInitialize(engine){
        console.log("Dog created");

        this.graphics.use(Resources.Dog.toSprite());

        this.scale = new Vector(0.3, 0.3)

        this.pos = new Vector(
            300, 
            400);

            
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
    
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
          yspeed = -100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
          yspeed = 100;
        }
    
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
          xspeed = 100
        }
    
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
          xspeed = -100
        }
    
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x < 0)

    }

   

    hitSomething(event) {
        event.other.kill() 
    }

}