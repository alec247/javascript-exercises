const fibonacci = function(index) {
    // negative input outputs "OOPS"
    if(index <= 0) {
        return "OOPS";
    }

    // convert string values to ints
    if (typeof index === "string") {
        index = Number(index);
    }

    // create initial array to push fib numbers to
    let fibArray = [1, 1];

    // run fib sequence for index iterations, push each number to fibArray
    for (let i = 0; i < index; i++) {
        if (fibArray[i]) continue;

        let nextNum = fibArray[i - 1] + fibArray[i - 2];
        fibArray.push(nextNum);
    }

    // returns correct value
    return fibArray[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
