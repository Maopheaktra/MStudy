import { Shape } from "./Shape";
export class Square extends Shape{
    constructor(private size:number, leftX:number, bottomY:number){
        super(leftX, bottomY);
        this.size = size;
    }
    getWidth(): number {
        return this.size;
    }
    getHeight(): number {
        return this.size;
    }
    getArea(): number {
        return this.size* this.size;
    }
}