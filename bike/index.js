///======= ES6 =======//
// class Bike {
//     constructor(price, max_speed){
//         this.price = price;
//         this.max_speed = max_speed;
//         this.miles = 0;
//     }
//     displayInfo(){
//         //This method display the bike's price, max speed and the miles
//         console.log('Bike price ' + this.price);
//         console.log('Max Speed ' + this.max_speed);
//         console.log('Miles Driven ' + this.miles);
//     }
//     drive(){
//         // have it display "Driving" on the screen and increase the total miles driven by 10.
//         this.miles += 10;
//         console.log('Driving ' + this.miles + ' miles');
//         return this;
//     }
//     reverse(){
//         // have it display "Reversing" on the screen and decrease the total miles driven by 5.
//         if(this.miles > 0){ // to prevent the instance from having negative miles
//             this.miles -= 5;
//         }
//         console.log('Reversing ' + this.miles + ' miles');
//         return this;
//     }
// }
// let bike = new Bike(1500, 250);
// console.log('=========Have the first instance drive three times, reverse once, and have it displayInfo(). ==========');
// bike.drive().drive().drive().reverse().displayInfo();
// console.log('=========Have the second instance drive twice, reverse twice, and have it displayInfo().==========');
// bike.drive().drive().reverse().reverse().displayInfo();
// console.log('=========Have the third instance reverse three times and displayInfo().===========');
// bike.reverse().reverse().reverse().displayInfo();

///======= ES5 without Prototype=======//
function Bike(price, max_speed){
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
    this.displayInfo = function (){ //have this method display the bike's price, maximum speed, and the total miles driven.
        console.log('Bike price ' + this.price);
        console.log('Max Speed ' + this.max_speed);
        console.log('Miles Driven ' + this.miles);
    };
    this.drive = function(){ //have it display "Driving" on the screen and increase the total miles driven by 10.
        this.miles += 10;
        console.log('Driving ' + this.miles + ' miles');
        return this;
    };
    this.reverse = function(){ //have it display "Reversing" on the screen and decrease the total miles driven by 5.
        if(this.miles > 0){  // to prevent the instance from having negative miles
            this.miles -= 5;
        }
        console.log('Reversing ' + this.miles + ' miles');
        return this;
    };
}
let bike = new Bike(1500, 250);
console.log('=========Have the first instance drive three times, reverse once, and have it displayInfo(). ==========');
bike.drive().drive().drive().reverse().displayInfo();
console.log('=========Have the second instance drive twice, reverse twice, and have it displayInfo().==========');
bike.drive().drive().reverse().reverse().displayInfo();
console.log('=========Have the third instance reverse three times and displayInfo().===========');
bike.reverse().reverse().reverse().displayInfo();

///======= ES5 with Prototype=======//
// function Bike(price, max_speed){
//     this.price = price;
//     this.max_speed = max_speed;
//     this.miles = 0;
// }
// Bike.prototype.displayInfo = function(){ //have this method display the bike's price, maximum speed, and the total miles driven.
//     console.log('Bike price ' + this.price);
//     console.log('Max Speed ' + this.max_speed);
//     console.log('Miles Driven ' + this.miles);
// };
// Bike.prototype.drive = function(){ //have it display "Driving" on the screen and increase the total miles driven by 10.
//     this.miles += 10;
//     console.log('Driving ' + this.miles + ' miles');
//     return this;
// };
// Bike.prototype.reverse = function(){ //have it display "Reversing" on the screen and decrease the total miles driven by 5.
//     if(this.miles > 0){  // to prevent the instance from having negative miles
//         this.miles -= 5;
//     }
//     console.log('Reversing ' + this.miles + ' miles');
//     return this;
// };

// let bike = new Bike(1500, 250);
// console.log('=========Have the first instance drive three times, reverse once, and have it displayInfo(). ==========');
// bike.drive().drive().drive().reverse().displayInfo();
// console.log('=========Have the second instance drive twice, reverse twice, and have it displayInfo().==========');
// bike.drive().drive().reverse().reverse().displayInfo();
// console.log('=========Have the third instance reverse three times and displayInfo().===========');
// bike.reverse().reverse().reverse().displayInfo();