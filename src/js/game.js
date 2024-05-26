import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, BoundingBox, Axis, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Player } from './Player.js'
import { Train } from './train.js'
import { Trashcan } from './trashcan.js'
import { Barrier } from './barrier.js'
import { Ground } from './ground.js'
import { Coin } from './coin.js'
import { UI } from './ui.js'

export class Game extends Engine {
    player
    score = 0
    ui

    addPoint() {
        this.score++
        // UI.scoreText.text = `score: ${this.score}`
        this.ui.updateScore(this.score);
        console.log(`score: ${this.score}`)
    }

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 800)
            }
        })
        this.start(ResourceLoader).then(() => this.startGame())
        this.graphics = undefined
    }



    startGame() {
        console.log("start de game!")

        const background = new Background();
        this.add(background);

        let train = new Train();
        this.add(train);

        this.player = new Player();

        this.add(this.player);
        this.currentScene.camera.strategy.lockToActorAxis(this.player, Axis.X)

        this.barrier = new Barrier(this);
        this.add(this.barrier)

        this.ground = new Ground(this);
        this.add(this.ground)

        this.ui = new UI()
        this.add(this.ui)

        const trashcans = [1180, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
        for (let index = 0; index < trashcans.length; index++) {

            const trashcan = new Trashcan(trashcans[index]);
            this.add(trashcan);
        }

        const coins = [1380, 3200, 5200, 7200, 9200, 10200];
        for (let index = 0; index < trashcans.length; index++) {

            const coin = new Coin(coins[index]);
            this.add(coin);

        }

    }

}

new Game()
