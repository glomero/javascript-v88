///====== Use ES5 Syntax - where methods are directly added inside the function=====//
// function Desk(name){
//     this.name = name;
//     this.x = 0;
//     this.y = 0;
//     this.color = 'black';
//     this.mov = function(x,y){
//         this.x = x;
//         this.y = y;
//     };
//     this.updateObject = function(new_color){
//         this.color = new_color;
//     };
// }
// let desk1 = new Desk('oak desk');
// let desk2 = new Desk('maple desk');
// desk1.updateObject('brown');
// console.log(desk1);
// console.log(desk2);

// =====Use ES5 Syntax but this time using prototype to add methods=====///
// function Desk(name){
//     this.name = name;
//     this.x = 0;
//     this.y = 0;
//     this.color = 'black';
// };
// Desk.prototype.mov = function(x,y){
//     this.x = x;
//     this.y = y;
// };
// Desk.prototype.updateColor = function(new_color){
//     this.color = new_color;
// };
// let desk1 = new Desk('oak desk');
// let desk2 = new Desk('maple desk');
// desk1.updateColor('brown');
// console.log(desk1);
// console.log(desk2);

//======================Use ES6 Class syntax======////
class Desk{
    constructor(name){
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.color = 'black';
    };
    move(x,y){
        this.x = x;
        this.y = y;
    }
    updateColor(new_color){
        this.color = new_color
    }
}
let desk1 = new Desk('oak desk');
let desk2 = new Desk('maple desk');
desk1.updateColor('brown');
console.log(desk1);
console.log(desk2);