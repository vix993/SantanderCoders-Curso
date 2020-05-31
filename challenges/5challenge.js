// In this challenge, we were tasked with creating a function
// that receives an int x and creates a list that draws a staircase using "#"
// with x amount of steps.
// eg. x = 3 would return
// ["  #",
//  " ##",
//  "###"]

function escada(x){
    var newlist = []
    for(var i = 0; i < x; i++){
        newlist.push(" ".repeat(i) + "#".repeat(x - i))
    }
    return newlist.reverse()
}
