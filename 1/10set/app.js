/**
 * 
 * @param {number[][]} arr 
 */
function uniteUnique(...arr) {
    return arr.reduce((acc,cur)=>[...acc,...cur],[])
                .filter((a,i,arr)=>{
                    const nArr = arr.slice(0,i)
                    return !nArr.includes(a);
                });
}
  
 console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));