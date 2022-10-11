const array = [1, 5, -1, 2, 6, 7, 9, 100];
const seq = [1, -1, 2, 7, 100];
const seq2 = [1, -1, 2, 7, 100, 5];

const isSubsequence = (array, seq) => {
    let seqPointer = 0;

    for (let index in array) {
        if (array[index] === seq[seqPointer]) {
            seqPointer++;
        }

        if (seqPointer === seq.length) {
            return true;
        }
    }

    return false;
}

console.log(isSubsequence(array, seq));
console.log(isSubsequence(array, seq2));