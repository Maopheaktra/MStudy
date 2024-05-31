class DomElement{
    private name:string;
    private parent?:DomElement;
    private children:DomElement[]=[];

    constructor(name:string){
        this.name=name;
    }
    getName():string{
        return this.name;
    }
    isRoot():boolean{
        return !this.parent;
    }
    addChild(child:DomElement):void{
            this.children.push(child);
    }
    setParent(parent:DomElement):void{
        this.parent=parent
    }
}

let html=new DomElement("html");
let head = new DomElement("head");
let body = new DomElement("body");
let title = new DomElement("title");
let a = new DomElement("a");
let h1 = new DomElement("h1");

html.addChild(head);
html.addChild(body);

//Add child and setparent to head
head.addChild(title);
head.setParent(html);

//Add child and setparent to body
body.addChild(a);
body.addChild(h1);
body.setParent(html);

//setparent to a h1, title
a.setParent(body);
h1.setParent(body);
title.setParent(head);

console.log(html);
// console.log(body.isRoot);

