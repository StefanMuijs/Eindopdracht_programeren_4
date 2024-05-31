import { Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur"
import { Resources } from "./resources"

export class UI extends ScreenElement {

    scoreText
    timerText
    startTime

    constructor() {
        super();
        this.scoreText = new Label({
            text: `Coins: 0`,
            pos: new Vector(0, 0),
            font: new Font({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.addChild(this.scoreText)

        this.timerText = new Label({
            text: `Time: 0s`,
            pos: new Vector(0, 30),
            font: new Font({
                unit: FontUnit.Px,
                size: 20,
                color: Color.White
            })
        })
        this.addChild(this.timerText)

        this.startTime = Date.now();
    }

    updateScore(newScore) {
        this.scoreText.text = `Coins: ${newScore}`
    }

    onPreUpdate() {
        let currentTime = Date.now();
        let elapsedTime = Math.floor((currentTime - this.startTime) / 1000);
        this.timerText.text = `Time: ${elapsedTime}s`;
    }
}