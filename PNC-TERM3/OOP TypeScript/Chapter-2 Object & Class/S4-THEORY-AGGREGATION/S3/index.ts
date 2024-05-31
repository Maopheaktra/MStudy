// class house {
//     owner : string;  
//     tree : allTree[] = []; 
//     constructor(owner:string){
//         this.owner= owner;
//         this.tree = [];
//     }
//     addTree(Tree:allTree){
//         this.tree.push(Tree);
//     }

//     getInfo(){
//         return `Hello, this house's owner is ${this.owner}, there are ${this.tree.length.toString} trees!`;
//     }
// }
// class allTree {
//     numerTree : number;
//     constructor(numberTree:number){
//         this.numerTree = numberTree;
//     }
// }
// const houseRonan = new house("Ronan");
// const Tree = new allTree(10);
// console.log(Tree);
// houseRonan.addTree(Tree);
// console.log(houseRonan.getInfo());
// // 