// In this challenge we were tasked with creating a function
// that predicts the growth of a perfect tree.
// The tree grows in the following patternA:
// When it is first planted it is 1m in height.
// During the first cicle it will double in height during the spring.
// Then it will grow 1m in the summer and repeat this pattern.

function alturaArvoreUtopica(N){
    var height = 0;
    for (var i = 0; i <= N; i++){
        i % 2 == 0 ? height++: height *= 2;
    }
    return height;
}
