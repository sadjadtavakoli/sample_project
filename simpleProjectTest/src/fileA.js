const functionC1 = require('./FileC').functionC1;

function functionA1(){ // a
    functionC1()
}

class FunctionA2Class {
    functionA2(){ // d
    functionA1()
    }
}

module.exports = {functionA1, FunctionA2Class}

