function steamrollArray(arr) {
    return arr.reduce((acc,curr)=>{
        if(Array.isArray(curr))
            return [...acc,...steamrollArray(curr)]
        return [...acc,curr]
    },[]);
}
  
let ret =  steamrollArray([1, [2], [3, [[4]]]]);
console.log();