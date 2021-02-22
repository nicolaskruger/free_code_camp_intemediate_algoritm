/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function diffArray(arr1, arr2) {
    var newArr = [...arr1,...arr2].filter(v=>!arr2.includes(v)||!arr1.includes(v));
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);