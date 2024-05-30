import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, BoundingBox, Axis, SolverStrategy, Scene } from "excalibur"
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
import { EndTrain } from './endTrain.js'

export class Level1 extends Scene {
    player
    score = 0
    ui
    finished = false;

    
    addPoint() {
        this.score++
        // UI.scoreText.text = `score: ${this.score}`
        this.ui.updateScore(this.score);
        console.log(`score: ${this.score}`)
    }

    onInitialize(engine) {
        console.log("start de game!")

        const background = new Background();
        engine.add(background);

        // let train = new Train();
        // this.add(train);

        this.player = new Player();
        this.add(this.player);

        this.camera.strategy.lockToActorAxis(this.player, Axis.X)

        this.barrier = new Barrier(this, 50);
        this.add(this.barrier)

        this.ground = new Ground(this);
        this.add(this.ground)

        this.ui = new UI()
        this.add(this.ui)


        const coinsx = [1380, 3500, 5300, 7600, 9200, 10500, 12300, 14500, 16600, 18500];
        const coinsy = [200, 500, 300, 500, 200, 400, 200, 500, 300, 500, 200,]
        for (let index = 0; index < coinsx.length; index++) {

            const coin = new Coin(coinsx[index], coinsy[index]);
            this.add(coin);

        }

        const objectsx = [1180, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000];
        const objects = [Bench, Trashcan, Suitcase,Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase, Bench, Trashcan, Suitcase]
        for (let index = 0; index < objectsx.length; index++) {

            const trashcan = new objects[index](objectsx[index]);
            this.add(trashcan);
        }

        // this.barrier = new Barrier(this, 20000);
        // this.barrier.graphics.flipHorizontal = true;
        // this.add(this.barrier)

        // if(this.score > 9){
        //     console.log('finishhhh')
        //     let endtrain = new EndTrain();
        //     this.add(endtrain);
        // }
    }

    onPostUpdate() {
        if(this.score > 9 && !this.finished){
            console.log('finishhhh')
            let endtrain = new EndTrain();
            this.add(endtrain);
            this.finished = true;
        }
    }
    

}
