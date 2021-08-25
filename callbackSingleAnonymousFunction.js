
function caller(callback){
    callback()
}

caller(()=>{
    //  do nothing
    console.log("enough?!")
})

function temp(){
    console.log("nothing")
}

