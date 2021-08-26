
function caller(callback) {
    callback()
}

caller(() => {
    //  do nothing
    console.log("enough?!")
    let nestedOne = function () {
    }
    console.log("enough?!")
    console.log("enough?!")
})((test) => {
    console.log("let's test these ones!")
    console.log("let's test these ones!")
})

let testArrow = () => {
    //  do nothing
}

let testFunction = function(){
    //  again nothing
    function newone(){
        // change new one!
    }
}

function temp() {
}