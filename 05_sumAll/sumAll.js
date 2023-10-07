const sumAll = function(start, end) {

    let sum = 0;
    if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number' ){
        //Checks for error cases
        //when start or end is negative
        //when start or end is NaN (not a number)
        return 'ERROR';
    }
    else if (start < end){
      for (let i = start; i < end + 1; i++){ //stop at end+1 b/c we want to include end 
        sum = sum + i;
        }  
    }
    else{
        for (let i = end; i < start + 1; i++){
            sum = sum + i;
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
