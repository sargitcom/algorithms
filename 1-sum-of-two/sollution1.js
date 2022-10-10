const array = [-1, 5, 4, 3, 2, 10, 8, 20];
const requiredSum = 28;

function returnSearchedNumbers(array, requiredSum)
{
   for (index in array) {
      for (index2 in array) {
	if (array[index] + array[index2] === requiredSum) {
          return [
            array[index],
            array[index2],
          ];
        }

      }
   }

   return [];
}


console.log(returnSearchedNumbers(array, requiredSum));
