import { Actor, Keys, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';
import { vector } from 'excalibur/build/dist/Util/DrawUtil';

export class Dog extends Actor {

  constructor() {
    super({
      width: Resources.Dog.width,
      height: Resources.Dog.height
    })
  }

  onInitialize(engine) {
    console.log("Dog created");

    this.graphics.use(Resources.Dog.toSprite());

    this.scale = new Vector(0.3, 0.3)

    this.pos = new Vector(
      -150,
      20);

  }

  onPostUpdate(engine) {
    let xspeed = 0;

    if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
      xspeed = 300
    }

    if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
      xspeed = -300
    }

    this.graphics.flipHorizontal = (xspeed < 0)

  }



  hitSomething(event) {
    event.other.kill()
  }

}