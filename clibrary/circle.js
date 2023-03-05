//========== ES5 ========//
// function Circles(val){
//     this.circles = [];
//     for(let i = 0; i < val; i++){
//         this.circles[i] = document.createElement('p'); //create p tag element
//         this.circles[i].randomRadius = Math.floor(Math.random() * 50) + 10; //create a random randomrandomRadius
//         this.circles[i].x = Math.floor(Math.random() * 1000) + 50; 
//         this.circles[i].y = Math.floor(Math.random() * 500) + 50;
//         this.circles[i].bgColor = 0; 
//     }
//     this.draw_circles = function(id){
//         for(let i = 0; i < this.circles.length; i++){
//             this.circles[i].bgColor = this.randomColor();
//             this.setAttr(this.circles[i]);
//             this.expand(this.circles[i]);
//             document.getElementById(id).appendChild(this.circles[i]);
//         }
//     };
//     this.expand = function (currentCircle) {
//             setInterval(function () {
//                 currentCircle.randomRadius += 1;
//                 currentCircle.style.width = currentCircle.randomRadius + 'px';
//                 currentCircle.style.height = currentCircle.randomRadius + 'px';
//                 if (currentCircle.randomRadius == 100) {
//                     currentCircle.style = '';
//                     currentCircle.remove();
//                 }
//             }, 100);
//         };
//     this.setAttr = function (currentCircle) {
//             currentCircle.setAttribute('class', 'circle'); //set class for p tag
//             currentCircle.setAttribute('style', 'width: ' + currentCircle.randomRadius + 'px;' +
//                     'height: ' + currentCircle.randomRadius + 'px;' + 'left: ' +(currentCircle.x - currentCircle.randomRadius / 2) +'px;' +
//                     'top: ' + (currentCircle.y - currentCircle.randomRadius / 2) + 'px;' + 'display: inline-block;' +
//                     'background-color: ' + currentCircle.bgColor
//             );
//     };
//     this.randomColor = function(){
//         let temp = '0123456789ABCDEF';
//         let color = '#';
//         for(let i = 0; i < 6; i++){
//             color += temp[Math.floor(Math.random() * 15)];
//         }
//         return color;
//     };
// }
//================================= ES5 with Prototype=======================//
// function Circles(val){
//     this.circles = [];
//     for(let i = 0; i < val; i++){
//         this.circles[i] = document.createElement('p'); //create p tag element
//         this.circles[i].randomRadius = Math.floor(Math.random() * 50) + 10; //create a random randomrandomRadius
//         this.circles[i].x = Math.floor(Math.random() * 1000) + 50; 
//         this.circles[i].y = Math.floor(Math.random() * 500) + 50;
//         this.circles[i].bgColor = 0; 
//     }
//     Circles.prototype.draw_circles = function(id){
//         for(let i = 0; i < this.circles.length; i++){
//             this.circles[i].bgColor = this.randomColor();
//             this.setAttr(this.circles[i]);
//             this.expand(this.circles[i]);
//             document.getElementById(id).appendChild(this.circles[i]);
//         }
//     };
//     Circles.prototype.expand = function (currentCircle) {
//             setInterval(function () {
//                 currentCircle.randomRadius += 1;
//                 currentCircle.style.width = currentCircle.randomRadius + 'px';
//                 currentCircle.style.height = currentCircle.randomRadius + 'px';
//                 if (currentCircle.randomRadius == 100) {
//                     currentCircle.style = '';
//                     currentCircle.remove();
//                 }
//             }, 100);
//         };
//     Circles.prototype.setAttr = function (currentCircle) {
//             currentCircle.setAttribute('class', 'circle'); //set class for p tag
//             currentCircle.setAttribute('style', 'width: ' + currentCircle.randomRadius + 'px;' +
//                     'height: ' + currentCircle.randomRadius + 'px;' + 'left: ' +(currentCircle.x - currentCircle.randomRadius / 2) +'px;' +
//                     'top: ' + (currentCircle.y - currentCircle.randomRadius / 2) + 'px;' + 'display: inline-block;' +
//                     'background-color: ' + currentCircle.bgColor
//             );
//     };
//     Circles.prototype.randomColor = function(){
//         let temp = '0123456789ABCDEF';
//         let color = '#';
//         for(let i = 0; i < 6; i++){
//             color += temp[Math.floor(Math.random() * 15)];
//         }
//         return color;
//     };
// }
//===============ES6======/////
class Circles{
    constructor(val){
        this.circles = [];
        for(let i = 0; i < val; i++){
            this.circles[i] = document.createElement('p'); //create p tag element
            this.circles[i].randomRadius = Math.floor(Math.random() * 50) + 10; //create a random randomrandomRadius
            this.circles[i].x = Math.floor(Math.random() * 1000) + 50; 
            this.circles[i].y = Math.floor(Math.random() * 500) + 50;
            this.circles[i].bgColor = 0; 
        }
    };
    draw_circles = function(id){
        for(let i = 0; i < this.circles.length; i++){
            this.circles[i].bgColor = this.randomColor();
            this.setAttr(this.circles[i]);
            this.expand(this.circles[i]);
            document.getElementById(id).appendChild(this.circles[i]);
        }
    };
    expand = function (currentCircle) {
            setInterval(function () {
                currentCircle.randomRadius += 1;
                currentCircle.style.width = currentCircle.randomRadius + 'px';
                currentCircle.style.height = currentCircle.randomRadius + 'px';
                if (currentCircle.randomRadius == 100) {
                    currentCircle.style = '';
                    currentCircle.remove();
                }
            }, 100);
        };
    setAttr = function (currentCircle) {
            currentCircle.setAttribute('class', 'circle'); //set class for p tag
            currentCircle.setAttribute('style', 'width: ' + currentCircle.randomRadius + 'px;' +
                    'height: ' + currentCircle.randomRadius + 'px;' + 'left: ' +(currentCircle.x - currentCircle.randomRadius / 2) +'px;' +
                    'top: ' + (currentCircle.y - currentCircle.randomRadius / 2) + 'px;' + 'display: inline-block;' +
                    'background-color: ' + currentCircle.bgColor
            );
    };
    randomColor = function(){
        let temp = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i++){
            color += temp[Math.floor(Math.random() * 15)];
        }
        return color;
    };
}