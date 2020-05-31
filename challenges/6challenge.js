// In this challenge we were tasked with creating a function
// that predicts the growth of a perfect tree.
// The tree grows in the following pattern:
// When it is first planted it is 1m in height.
// In the first cicle it will double in height during the spring.
// Then it will grow 1m in the summer and repeat this pattern.
// eg. N = 0, tree = 1m
//     N = 1, tree = 2m
//     N = 2, tree = 3m
//     N = 3, tree = 6m
//     N = 4, tree = 7m
//     N = 5, tree = 14m

function alturaArvoreUtopica(N){
    var height = 0;
    for (var i = 0; i <= N; i++){
        i % 2 == 0 ? height++: height *= 2;
    }
    return height;
}
