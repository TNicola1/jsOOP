import { Digital } from "./Digital"

export class Video extends Digital {
    framerate

    constructor(title, author, framerate) {
        super(title, author)
        this.framerate = framerate
    }

    showInfo() {
        super.showInfo()
        console.log(`Il video ha un framerate ${this.framerate}`)
    }
}