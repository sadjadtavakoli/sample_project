const assert = require('assert')
const fileC = require('../src/FileC');

function testFunctionC1() { 
    fileC.functionC1()
    return true
} 
 
var result = testFunctionC1(); 
assert( result, 'Checking C1'); 


function test2FunctionC1() { 
    fileC.functionC1()
    return false
} 
assert( !test2FunctionC1(), 'Checking C1 second version'); 
