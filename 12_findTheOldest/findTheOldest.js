const findTheOldest = function(peopleArr) {
    
   const getAge = function(birth, death){
        if (!death){ //when yearofDeath does not exit, we get undefined which is false so !(undefined) = true. when given a num,  !(death) is false.
            return new Date().getFullYear() - birth;
        }
        else{
            return death - birth;
        }
    }

    return peopleArr.reduce((oldest, person) =>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);

        if (personAge > oldestAge){
            oldest = person
        }//since we dont have an initial after {funciton body}, .reduce() will have first element be initial and start from the second

        return oldest; //return oldest for the next iteration
    }); 
    
};

// Do not edit below this line
module.exports = findTheOldest;
