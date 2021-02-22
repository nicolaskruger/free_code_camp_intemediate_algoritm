/**
 * 
 * @param {string} str 
 */
function fearNotLetter(str) {
    let find = false;
    const res = str.split('')
                .reduce((acc,cur)=>{
                    if(find)
                        return acc;
                    if(acc!=cur){
                        find = true;
                        return acc;
                    }
                    return String.fromCharCode(acc.charCodeAt(0)+1);
                },str[0]);
    return /[^a-z]/.test(res) ? undefined : res;
  }
  
  console.log(fearNotLetter("abce"));