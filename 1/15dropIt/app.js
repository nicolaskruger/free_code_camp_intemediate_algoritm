/**
 * 
 * @param {number[]} arr 
 * @param {(n:number)=>boolean} func 
 */
function dropElements(arr, func) {
    const find = arr.find(func);
    return find==undefined?[]:arr.slice(arr.indexOf(find));
  }
  
  dropElements([1, 2, 3, 4], function(n) {return n > 5;})