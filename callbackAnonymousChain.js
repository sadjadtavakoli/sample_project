function caller_JADID(callback, callback2, callback3){
    callback(callback2(callback3))
}

function caller2(callback, callback2, callback3){
    callback(callback2(callback3))
    return "slm"
}

caller((callerInput)=>{
    // do nothing
}, (callback)=>{
    return callback()
}, ()=>{ return 5 })