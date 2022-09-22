const globalArray = [5, 6, 3, 2, 9];
const globalArray1 = [1, 30, 4, 21, 10000000];
const globalArray2 = [140000, 104, 99];
const globalArray3 = [35, 8776, 1000879, 7, 45, 900];

function nonMutatingSort(arr) {

    return arr.slice().sort((a, b) => { return a - b });
}

console.log(nonMutatingSort(globalArray));
console.log(nonMutatingSort(globalArray1));
console.log(nonMutatingSort(globalArray2));
console.log(nonMutatingSort(globalArray3));