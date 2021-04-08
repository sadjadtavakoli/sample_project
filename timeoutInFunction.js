function foo(){
//    do nothing 
}


function myFunction() {
  setTimeout(foo, 1000);
}

setTimeout(function() {
    foo(); 
}, 500);
