function narcissistic(value) {
    const stringToNum = Array.from(String(value), Number);
    const length = stringToNum.length;

    let sum = 0;

    for (let i in stringToNum) {
        sum = sum + Math.pow(stringToNum[i], length);
    }

    if (sum === value) {
        return true;
    } else {
        return false;
    }
}

console.log(narcissistic(267));