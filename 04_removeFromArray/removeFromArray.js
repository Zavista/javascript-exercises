const removeFromArray = function(array, ...removed) {
    let end  =  array.length - 1;

    for (const item of removed){ 
        //... is like *args from python where it allows for an infinite number of arguments
        //note this will store each extra element into an array 
        //thus we will iterate through this list, the const is just so that for each iteration, item doens't change

        for (let i = end; i >= 0; i--){ 
            //start from the end and move to the first index
            //since if we start form 0 and we remove an element, it will mess up all the indexes
            //but if we remove an element from the end and go to the next, it will work
            if (array[i] === item){ //use === to make sure we are only removing when they are the same type (ex. "1" and 1 will not remove)
                array.splice(i, 1); //Removes the current element using splice
            }
        }    
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
