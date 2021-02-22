/**
 * 
 * @param {number} num 
 */
function sumPrimes(num) {
    const arr = [...Array(num+1).keys()].slice(2);
    return arr.filter(v=>v<=2||arr.slice(0,v-2).every(val=>v%val!=0))
                .reduce((acc,curr)=>acc+curr,0);
}
  
console.log(sumPrimes(10));