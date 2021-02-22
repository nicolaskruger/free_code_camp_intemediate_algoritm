/**
 * 
 * @param {[]} arr 
 * @param {[]} x 
 */
function destroyer(arr,...x) {
    return arr.filter(s=>!x.includes(s));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);