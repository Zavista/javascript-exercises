const fibonacci = function(n) {


    if (n < 0){
        return "OOPS";
    }
    else if (n === 0){
        return 0;
    }

    let firstPrev = 1;
    let secondPrev = 0;
    //we will start at 2nd element of [1, 1, 2, 3, 5] which has firstPrev =1 and secondPrev = 0;
    //will stop right before nth element
    for (let i = 2; i < n; i++){
        const curr = secondPrev + firstPrev
        secondPrev = firstPrev;
        firstPrev = curr;
    }

    return secondPrev + firstPrev;


};

// Do not edit below this line
module.exports = fibonacci;
