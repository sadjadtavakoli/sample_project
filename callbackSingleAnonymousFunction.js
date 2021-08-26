
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
})

let testArrow = () => {
    //  do nothing
}

let testFunction = function () {
    //  again nothing
    function newone() {
        // change new one!
    }
}

function temp() {
}

function tryThatone() {

}

let andthisone = function () {

}