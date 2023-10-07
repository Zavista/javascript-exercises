const repeatString = function(str, n) {
    let ans = "";
    for (let i = 0; i < n; i++){
        ans = ans + str; //appends str to ans
    }
    
    if (n < 0){
        return "ERROR";
    }

    return ans;

};

// Do not edit below this line
module.exports = repeatString;
