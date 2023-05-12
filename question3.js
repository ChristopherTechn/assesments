
 function createArray(arr) {
        if (arr.length < 1) {
          throw console.log("Array must have at least one element.");
        }
        return [arr[0], arr[arr.length - 1]];
      }
      
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [10];
  const arr3 = [];
  
