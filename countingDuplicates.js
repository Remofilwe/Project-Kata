function matchAll(re, str) {
    let match
    let matches = []

    while (match = re.exec(str)) {
        matches.push(...match)
    }

    return matches
}

function duplicateCount(text) {
    let count = 0;
    let checked = [];

    let textArray = text.split("");

    textArray.forEach((alpha) => {
        if (checked.find(el => el.toLowerCase() === alpha.toLowerCase())) return;

        checkCount = matchAll(new RegExp(alpha.toLowerCase(), "g"), text.toLowerCase()).length

        if (checkCount > 1) {
            count += 1;
        }

        checked.push(alpha);
    })

    return count;
}

console.log(duplicateCount("aabbcde"));