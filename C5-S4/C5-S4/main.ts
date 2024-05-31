import { BatMobile } from "./batMobile";
import { Minivan } from "./miniVan";
import { tucTuc } from "./tuctuc";
import { vechicleConvoy } from "./vichecleConvoy";

let batMobile1=new BatMobile("3Fg",500,false);
console.log(batMobile1.getSpeed());

let tuctuc1=new tucTuc("6yh",300,10);
console.log(tuctuc1.getSpeed());

let miniVan1=new Minivan("98ik",1000,80,10);
console.log(miniVan1.getSpeed());

let vechicleConvoy1=new vechicleConvoy();
vechicleConvoy1.addViechicle(batMobile1);
vechicleConvoy1.addViechicle(miniVan1);
vechicleConvoy1.addViechicle(tuctuc1);

console.log(vechicleConvoy1.getMaxSpeed());



