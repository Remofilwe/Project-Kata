function createPhoneNumber(numbers) {
    let tempNumber = "";

    numbers.forEach((num, i) => {
        if (i === 0) {
            tempNumber += `(${num}`
        } else if (i === 2) {
            tempNumber += `${num}) `
        } else if (i === 5) {
            tempNumber += `${num}-`
        } else {
            tempNumber += `${num}`
        }
    })

    return tempNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 8, 7, 8, 9, 0]))