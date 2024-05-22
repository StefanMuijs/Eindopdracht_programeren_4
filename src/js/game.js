import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, BoundingBox, Axis, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Player } from './Player.js'
import { Train } from './train.js'
import { Trashcan } from './trashcan.js'
import { Barrier } from './barrier.js'
import { Ground } from './ground.js'

export class Game extends Engine {
    player

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
    }



    startGame() {
        console.log("start de game!")

        const background = new Background();
        this.add(background);

        let train = new Train();
        this.add(train);

        this.player = new Player();
    
        this.add(this.player);

        this.barrier = new Barrier(this);
        this.add(this.barrier)

        
        this.ground = new Ground(this);
        this.add(this.ground)

        const trashcans = [3000, 5000, 7000];
        const trashcan = new Trashcan();
        this.add(trashcan);

        this.currentScene.camera.strategy.lockToActorAxis(this.player, Axis.X)
    }

}

new Game()
