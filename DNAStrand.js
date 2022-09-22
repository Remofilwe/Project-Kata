function DNAStrand(dna) {

    const myArray = dna.split("");
    myArray.forEach((element, index) => {
        if (element === "A") {
            myArray[index] = "T";
        } else if (element === "T") {
            myArray[index] = "A";
        } else if (element === "C") {
            myArray[index] = "G";
        } else {
            myArray[index] = "C";
        }
    });
    return myArray;
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
console.log(DNAStrand("AATT"));
console.log(DNAStrand("ATCG"));
