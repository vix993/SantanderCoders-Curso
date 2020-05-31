// In this challenge, we were tasked with creating a function
// that receives an array and compares the fraction of positives,
// zeros and negatives in the list, returning these in a list.
// eg. [2, 0, -2, -2] would return [0.25, 0.25, 0.5]

function maisMenos(array){
    var pos = 0;
    var neg = 0;
    var zero = 0;
    var newlist = []
    for (var i = 0; i < array.length; i++){
        if (array[i] > 0){
            pos++;
        } else if (array[i] < 0){
            neg++;
        } else {
            zero++;
        }
    }
    pos > 0 ? newlist.push(1 / (array.length / pos)) : newlist.push(0);
    zero > 0 ? newlist.push(1 / (array.length / zero)) : newlist.push(0);
    neg > 0 ? newlist.push(1 / (array.length / neg)) : newlist.push(0);
    return newlist
}
