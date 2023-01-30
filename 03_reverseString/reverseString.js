const reverseString = function(string) {
    //for loop for length of string, each time slice letter and push to empty array
    //once loop completes, for loop and pop() each element back into string
    //replaceAll() method to replace , with ''
    let myArray = [];
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        myArray.push(string.substr(i, 1));
    }

    for (let i = 0; i < string.length; i++) {
        newString += myArray.pop();
    }

    newString.replaceAll(/,/g, '');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
