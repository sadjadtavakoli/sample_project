
function caller(callback) {
    callback()
}

caller(() => {
    //  do nothing
    console.log("enough?!")
    let nestedOne = function(){
        console.log("of course nothing!")
    }
    console.log("enough?!")
    console.log("enough?!")
})


    ((test) => {
        console.log("let's test these ones!")
        console.log("let's test these ones!")
    })

function temp() {
}