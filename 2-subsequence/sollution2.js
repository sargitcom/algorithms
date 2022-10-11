const array = [1, 5, -1, 2, 6, 7, 9, 100];
const seq = [1, -1, 2, 7, 100];
const seq2 = [1, -1, 2, 7, 100, 5];

const isSubsequence = (array, seq) => {
    let seqPointer = 0;
    let arrayPointer = 0;

    while (seqPointer !== seq.length && arrayPointer < array.length) {
        if (array[arrayPointer] === seq[seqPointer]) {
            seqPointer++;
        }

        arrayPointer++;
    }

    return seqPointer === seq.length;
}

console.log(isSubsequence(array, seq));
console.log(isSubsequence(array, seq2));