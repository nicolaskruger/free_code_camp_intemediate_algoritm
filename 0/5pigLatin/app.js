/**
 * 
 * @param {string} str 
 */
function translatePigLatin(str) {
    if(/[aeiou]/.test(str[0]))
        return str+'way';
    const val = str.match(/[^aeiou]+/)[0];
    return str.replace(/[^aeiou]+/,'')+val+"ay";
  }
  
const val =  translatePigLatin("california");

console.log();