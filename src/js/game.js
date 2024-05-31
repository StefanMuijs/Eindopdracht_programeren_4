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
import { Level1 } from './level1.js'
import { Endscreen } from './endscreen.js'

export class Game extends Engine {
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
        this.add('startscreen', new Startscreen())
        this.goToScene('startscreen')

        this.add('Level1', new Level1());
        this.add('endscreen', new Endscreen());
    }

}

new Game()
