import { Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur"
import { Resources } from "./resources"

export class UI extends ScreenElement {

    scoreText

    constructor() {
        super();
        this.scoreText = new Label({
            text: `score: 0`,
            pos: new Vector(0, 0),
            font: new Font({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.addChild(this.scoreText)
    }

    updateScore(newScore) {
        this.scoreText.text = `Score: ${newScore}`
    }
}