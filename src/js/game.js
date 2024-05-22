import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, BoundingBox, Axis } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'
import { Bone } from './bone.js'
import { Background } from './background.js'
import { Player } from './Player.js'
import { Train } from './train.js'
import { Trashcan } from './trashcan.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }



    startGame() {
        console.log("start de game!")

        const background = new Background();
        this.add(background);

        let train = new Train();
        this.add(train);

        const player = new Player();
        this.add(player);

        const trashcan = new Trashcan();
        this.add(trashcan);

        this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1280, 720))

    }

}

new Game()
