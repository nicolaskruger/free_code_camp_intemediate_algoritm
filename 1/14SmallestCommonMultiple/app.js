
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}

/**
 * 
 * @param {number[]} arr 
 */
function smallestCommons(arr) {
    arr = arr.sort((a,b)=>a-b);
    return [...Array(arr[1]+1).keys()]
                .slice(arr[0])
                .reduce((acc,curr)=>lcm(acc,curr),arr[0]);
}
  
  
let ret = smallestCommons([1,5]);

console.log();