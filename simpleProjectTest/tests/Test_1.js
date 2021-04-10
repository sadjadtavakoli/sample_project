const assert = require('assert')
const fileA = require('../src/FileA');
const fileB = require('../src/FileB');

function testFunctionA2() { 
	let a2Instance = new fileA.FunctionA2Class()
    a2Instance.functionA2()
    return true
} 
 
var result = testFunctionA2(); 
assert( result, 'Checking A1'); 


function testFunctionsA1B1(){
    fileA.functionA1()
    fileB.functionB1()
    return true
}

assert( testFunctionsA1B1(), 'Checking A1 and B1'); 
