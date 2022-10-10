const array = [-1, 5, 4, 3, 2, 10, 8, 20];
const requiredSum = 3;

function returnSearchedNumbers(array, requiredSum)
{
    array.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = array.length ? array.length - 1 : 0;

    while (leftPointer !== rightPointer) {
       if (array[leftPointer] + array[rightPointer] === requiredSum) {
         return [
            array[leftPointer],
            array[rightPointer],
         ];
       }

       if (array[leftPointer] + array[rightPointer] < requiredSum) {
          leftPointer++;
       }

       if (array[leftPointer] + array[rightPointer] > requiredSum) {
          rightPointer--;
       }
    }

    return [];
}


console.log(returnSearchedNumbers(array, requiredSum));
