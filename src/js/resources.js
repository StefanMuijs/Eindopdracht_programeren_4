import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Dog: new ImageSource('images/dog.png'),
    Bone: new ImageSource('images/bone.webp'),
    Background: new ImageSource('images/level1.png', { wrapping: ImageWrapping.Repeat }),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }