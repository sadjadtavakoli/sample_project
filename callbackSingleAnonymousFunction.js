
function caller(callback) {
    callback()
}

caller(() => {
    //  do nothing
    let nestedOne = function () {
        console.log("yessssss")
    }
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