const removeFromArray = function(array, ...args) {
    // args can be accessed as any array (args[i])
    for (let i = 0; i < args.length; i++) {
        let index = array.indexOf(args[i]);

        if (index > -1){
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
