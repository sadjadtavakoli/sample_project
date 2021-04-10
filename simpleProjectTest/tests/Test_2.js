const assert = require('assert')
const fileB = require('../src/fileB')


function testFuntionB2(){
    let functionB2Instance = new fileB.FunctionB2Class()
    functionB2Instance.functionB2()
    return true;
}

assert(testFuntionB2(), 'Checking B2')


