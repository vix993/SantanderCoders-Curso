// In this challenge we were tasked with creating a function
// that takes an array and multiplies all of its elements.

function produto(array){
    var ret = 1;
    for(var i = 0; i < array.length; i++){
        ret = ret * array[i];
    }
    return ret;
}
