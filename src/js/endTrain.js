import { Actor, CollisionType, Keys, Rectangle, SpriteSheet, Vector, randomInRange, range } from 'excalibur';
import { Resources } from './resources';
import { Player } from './Player';

export class EndTrain extends Actor {

    constructor() {
        super({
            width: Resources.Train.width,
            height: Resources.Train.height,
            collisionType: CollisionType.Passive,
            z:-1
        })
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.Train.toSprite())
        this.vel = new Vector(300, 0)

        this.pos = new Vector(this.scene?.player?.pos.x + 2800 , 358)

        
        this.on('collisionstart', (event) =>  this.hitSomething(event, engine))

    }

    
    hitSomething(event, engine){
        if(event.other instanceof Player) {
            engine.goToScene('startscreen')
        }
     }

    //  if(event.other instanceof Player) {
    //     event.other.actions.moveBy(new Vector(800, 0), 200)
    //     engine.clock.schedule(
    //         () => {
    //             engine.goToScene('startscreen')
    //         }, 5000
    //     )
        
    // }
   

}