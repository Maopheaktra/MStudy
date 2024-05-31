import { Shape } from "./Shape";
export class Rectangle extends Shape{
    constructor(leftX:number, bottomY:number, private rightX:number,private topY:number){
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }
    getWidth(): number {
        return this.rightX-this.leftX;
    }
    getHeight(): number {
        return this.topY-this.bottomY;
    }
    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}
