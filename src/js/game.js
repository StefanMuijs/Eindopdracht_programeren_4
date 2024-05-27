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
import { Bench } from './bench.js'
import { Suitcase } from './suitcase.js'
import { Startscreen } from './startscreen.js'

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
        // this.add('startscreen', new Startscreen())
        // this.goToScene('startscreen')
        
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


        const coinsx = [1380, 3500, 5300, 7600, 9200, 10500];
        const coinsy = [200, 500, 300, 500, 200, 400]
        for (let index = 0; index < coinsx.length; index++) {

            const coin = new Coin(coinsx[index], coinsy[index]);
            this.add(coin);

        }

        const objectsx = [1180, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
        const objects = [Bench, Trashcan, Suitcase,Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase]
        for (let index = 0; index < objectsx.length; index++) {

            const trashcan = new objects[index](objectsx[index]);
            this.add(trashcan);
        }


    }

}

new Game()
