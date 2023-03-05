//1
let sum = function (a,b){
    return a+b;
};
function operate(num1, num2, operation){
    let result = operation(num1, num2);
    return result;
}
let answer = operate(1,1, sum);
console.log("answer is", answer);
// log ''answer is 2'

//2 
function greeting(a,b){
    return function(){
        console.log('hello');
        return a + b + 2;
    };
}
let result = greeting(1, 1);
console.log(result());
// log 'hello', 4
let add = function(a,b){
    return a + b;
};
let subtract = function(a,b){
    return a - b;
};
function randomOperation(num1, num2, operate1, operate2){
    let result = [operate1(num1, num2), operate2(num1, num2)];
    let randomChosen = Math.floor(Math.random() * 2);
    return result[randomChosen];
};
let _answer = randomOperation(1, 3, add, subtract);
console.log('result is ', answer);
//3
