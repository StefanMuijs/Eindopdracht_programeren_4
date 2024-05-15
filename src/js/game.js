import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Dog } from './dog.js'
import { Bone } from './bone.js'
import { Background } from './background.js'

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

        const dog = new Dog();
        this.add(dog);

        const bone = new Bone();
        this.add(bone);


        this.currentScene.camera.strategy.lockToActor(dog)
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))

    }

}

new Game()
