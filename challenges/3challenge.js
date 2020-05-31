// In this challenge, we were tasked with creating a function
// that receives an int and returns the factorial of the int

function fatorial(x){
    var ret = 1;
    for(var i = 0; i < x; i++){
        ret = ret * (i + 1);
    }
    return ret;
}
