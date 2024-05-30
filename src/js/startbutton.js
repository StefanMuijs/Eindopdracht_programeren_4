import { Actor, CollisionType, Vector } from "excalibur"
import { Resources } from "./resources"

export class StartButton extends Actor {
  constructor(engine) {
    super({
      width: Resources.StartButton.width,
      height: Resources.StartButton.width,
    })
  }

  onInitialize(engine) {
    console.log("StartButton created");

    this.pos = new Vector(
      620,
      300);
    this.graphics.use(Resources.StartButton.toSprite());

    this.on('pointerdown', () => {
      engine.goToScene('Level1')
      console.log('klik')
  })
  }

}
