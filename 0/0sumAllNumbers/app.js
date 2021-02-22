/**
 * 
 * @param {number[]} arr 
 */
function sumAll(arr) {
    const num = arr.sort((a,b)=>a-b);
    return [...Array(num[1]-num[0]+1).keys()]
                .reduce((acc,curr)=>acc+curr+num[0],0);
  }
  
  sumAll([1, 4]);