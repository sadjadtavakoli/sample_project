function functionB1(){ // b 
    let c = new FunctionB2Class()
        c.functionB2()
}

class FunctionB2Class {
    functionB2(){
        // do nothing c
    }
}


module.exports = {functionB1, FunctionB2Class}
