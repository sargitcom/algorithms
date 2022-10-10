const array = [-1, 5, 4, 3, 2, 10, 8, 20];
const requiredSum = 30;

function returnSearchedNumbers(array, requiredSum)
{
    let storage = {};

    for (index in array) {
	let currentNumber = array[index];
        let neededNumber = requiredSum - currentNumber;

	if (storage.hasOwnProperty(neededNumber)) {
	   return [
             currentNumber,
             neededNumber,
           ];
        }

        storage[currentNumber] = true;
    }

    return [];
}


console.log(returnSearchedNumbers(array, requiredSum));
