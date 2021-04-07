



function bia_ye_esme_kolan_JADID_BEZAR(callback, callback2, callback3){
    callback(callback2(callback3))
}

function caller2_new(callback, callback2, callback3){
    callback(callback2(callback3))
    return "slm"
}

caller((callerInput)=>{
    // do nothing
}, (callback)=>{
    return callback()
}, ()=>{ return 5 })