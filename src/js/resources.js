import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'
import * as ex from "excalibur";

// voeg hier jouw eigen resources toe
const Resources = {
    // Dog: new ImageSource('images/dog.png'),
    Background: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat }),
    Player: new ImageSource('images/player.png'),
    Train: new ImageSource('images/train.png'),
    Trashcan: new ImageSource('images/trashcan.png'),
    Barrier: new ImageSource('images/barrier.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }