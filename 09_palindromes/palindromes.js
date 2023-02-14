const palindromes = function (str) {
    str = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "");
    let strSplit = str.split("");
    let reverseArray = strSplit.reverse();
    let reversedStr = reverseArray.join("");

    if (reversedStr === str) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
