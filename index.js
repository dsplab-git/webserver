const {odd,even} = require('./var');
const checkNunber = require('./func');

function checkstringoddoreven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNunber(10));
console.log(checkstringoddoreven('hello'));