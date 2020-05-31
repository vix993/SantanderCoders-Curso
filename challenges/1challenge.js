// In this challenge, we are given an array of ints that represents the punctuality of the students
// eg. [5, -5, 0] where negative numbers are students that came early and 0's are students that are on time.
// We also get an int that represents the min number of students needed to go forward with the class.

// We were tasked with creating two function,
// one that, using an array and number,
// indicates true or false depending on whether the class will happen or not.

function acontece(array, num){
    var onTime = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] < 1){
            onTime++;
        }
    }
    return onTime >= num;
}

// The second function gets an array of lists and returns another list
// that indicates in order which classes happened and which did not.
// eg. [true, false, true]

function aberturas(array, num){
    var newlist = [];
    for (var i = 0; i < array.length; i++){
        newlist.push(acontece(array[i], num))
    }
    return newlist
}
