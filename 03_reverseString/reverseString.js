const reverseString = function(str) {
    let listofChar = str.split(""); //splits the str at "" so each char becomes a member of the array
    listofChar = listofChar.reverse()
    return listofChar.join(""); //joins each element back into a string
};

// Do not edit below this line
module.exports = reverseString;
