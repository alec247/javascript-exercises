const findTheOldest = function(people) {
    people.sort((firstPerson, secondPerson) => {
        if (!firstPerson.yearOfDeath) {
            firstAge = new Date().getFullYear() - firstPerson.yearOfBirth;
        } else {
            firstAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        }

        if (!secondPerson.yearOfDeath) {
            secondAge = new Date().getFullYear() - secondPerson.yearOfBirth;
        } else {
            secondAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        }

        return (firstAge > secondAge ? -1 : 1);
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
