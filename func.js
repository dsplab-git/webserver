const {odd, even} = require('./var');

function checkoddoreven(num) {
    if(num%2){
        return odd;
    }
    return even;
}

module.exports = checkoddoreven;