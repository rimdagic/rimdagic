import { generateRandom } from './utility.js'
import { canvas } from './experience.js'

export class Position {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

export class Velocity {
    constructor (dx, dy){
        this.dx = dx;
        this.dy = dy;
        }
    }