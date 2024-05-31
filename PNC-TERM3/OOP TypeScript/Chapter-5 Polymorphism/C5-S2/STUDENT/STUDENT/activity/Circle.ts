import { Shape } from './Shape';
export class Circle extends Shape{
    constructor(private radius:number, leftX:number, bottomY:number){
      super(leftX, bottomY);
      this.radius = radius;
    }
    getWidth(): number {
      return this.radius * 2;
    }
    getHeight(): number {
        return this.radius * 2;
    }
    getArea(): number {
        return Math.PI * this.radius**2;
    }
  }