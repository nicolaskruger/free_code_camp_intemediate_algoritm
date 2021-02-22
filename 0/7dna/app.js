/**
 * 
 * @param {string} str 
 */
function pairElement(str) {
    const dna= {
        A:"T",
        T:"A",
        G:"C",
        C:"G",
    }
    return str.split('')
                .reduce((acc,curr)=>[...acc,[curr,dna[curr]]],[]);
  }
  
  pairElement("GCG");