const palindromes = function (str) {


    function isLetter(char){
        return char.match(/[a-z0-9]/i); //checks if char is in the character class form a-z and the i signifies capitalizaiton doesn't matter
        //OR if char is in 0-9
    }


    let strList = str.split(""); //turns str into a list of characters
    strList = strList.filter(isLetter).map(char => char.toLowerCase());
    //filters stringList to only alphabet characters. 
    //map to convert each character into lowercase



    let left = 0;
    let right = strList.length - 1;

    while (left < right){
        if (strList[left] != strList[right]){
            return false;
        }
        left++;
        right--;
    } 
    return true;

    //could also return strList.reverse().join("") == str;

};

// Do not edit below this line
module.exports = palindromes;
