function foo(){
//    do nothing 
}

function bar(){}

function myFunction() {
  setTimeout(bar, 1000);
}

setTimeout(function() {
    foo(); 
}, 500);
