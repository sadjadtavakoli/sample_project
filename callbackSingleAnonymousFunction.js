
function caller(callback){
    callback()
}

caller(()=>{
    //  do nothing
    // let's change this one
    console.log("enough?!")
})

