
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
    // also change this one!
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
//     do nothing! change this one see what's happening
}