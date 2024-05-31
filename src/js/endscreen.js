import { Actor, CollisionType, Keys, Scene, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";
import { Startscreenbg } from "./startscreenbg";
import { StartButton } from "./startbutton";
import { Level1 } from "./level1";
import { Endscreenbg } from "./endscreenbg copy";

export class Endscreen extends Scene {

    constructor() {
        super()
    }

    onInitialize(engine) {
        const background = new Endscreenbg();
        this.add(background);

    }

}