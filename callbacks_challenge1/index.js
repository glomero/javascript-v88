//1 
function foreach(arr, num){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(num(arr[i]));
    }
    return array;
}

let result = foreach([1,2,3,4,5], function(num) { 
    return num*2; 
});
console.log(result); //this should log [2,4,6,8,10]

//2
result = foreach([1,2,3,"v88", "training"], function(val) { 
    if(typeof(val) === 'number') { 
        return 0;
    }
    else {
        return val;
    }
});
console.log(result); //this should log [0,0,0,"v88","training"];

//3
result = foreach([1,2,3,"hello"], function(val) { 
    return typeof(val); 
});
console.log(result); //this should log ["number", "number", "number", "string"];
//
//
// Filter function //
function filter(arr, val){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(val(arr[i]) == true){
            array.push(arr[i]);
        }
        
    }
    return array;
}
/*1*/
result = filter([1,2,3,4,15], function(val) { 
    return val<10; 
}); //this filters each value in the array and only allows values that is less than 10
console.log(result); //this should log [1,2,3,4]

/*2*/
result = filter([1,2,3,4,15], function(val) { 
    return val<3; 
}); //only allows values that is less than 3
console.log(result); //this should log [1,2]
//////
/////
//Reject
function reject(arr, val){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(val(arr[i]) == false){
            array.push(arr[i]);
        }
    }
    return array;
}
/*1*/
result = reject([1,2,3,4,15], function(val) { return val<10; }); //rejects any value that is less than 10
console.log(result); //this should log [15]

/*2*/
result = reject([1,2,3,4,15], function(val) { return val<3; }); //rejects any value that is less than 3
console.log(result); //this should log [3,4,15]