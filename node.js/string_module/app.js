const stringlib = require('./stringlib.js')();
console.log(stringlib.concat("Village", "88")); // should output "Village88"
console.log(stringlib.repeat("ha", 3)); // should output "hahaha"
console.log(stringlib.toString(5)); // should output "5"
console.log(stringlib.charAt("nice", 2)); // should output "c"
