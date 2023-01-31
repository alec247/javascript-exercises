const sumAll = function(num, ber) {
    
    let sum = 0;
    let bigNum = 0;
    let smallNum = 0;

    //check that numbers are positive integers. if negative or non-integer, return 'ERROR'
    if (!(Number.isInteger(num)) || !(Number.isInteger(ber))){
        return 'ERROR';
    }
    
    if ((num < 0) || (ber < 0)) {
        return 'ERROR';
    } 

    //figure out how to order them by whichever is larger
    if (num >= ber) {
        bigNum = num;
        smallNum = ber;
    } else {
        bigNum = ber;
        smallNum = num;
    }

    //use difference between both numbers as length of loop
    let diff = bigNum - smallNum;

    //for loop starting at smaller number, add to empty variable each loop (loops for length of difference from step 1)
    for (let i = smallNum; i < (smallNum + diff + 1); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
