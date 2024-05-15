import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, BoundingBox } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'
import { Bone } from './bone.js'
import { Background } from './background.js'
import { Player } from './Player.js'
import { Train } from './train.js'

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


        this.currentScene.camera.strategy.lockToActor(player)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1280, 720))

    }

}

new Game()
