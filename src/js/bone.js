import { Actor, Keys, Vector, randomInRange } from 'excalibur';
import { Resources } from './resources';

export class Bone extends Actor{

    constructor() {
        super({width: 300, height: 300 })
    }

    onInitialize(){
        console.log("Bone created");



        this.pos = new Vector(
            600, 
            600);

        this.graphics.use(Resources.Bone.toSprite());

        this.scale = new Vector(0.1, 0.1)
    }
}