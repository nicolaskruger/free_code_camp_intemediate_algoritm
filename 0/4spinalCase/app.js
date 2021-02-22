/**
 * 
 * @param {string} str 
 */
function spinalCase(str) {
    return str.replace(/(?<!^)[ _]?([A-Z])/g,'-$1').
                replace(" ",'-').toLowerCase();
}
  
const ret = spinalCase("Teletubbies say Eh-oh");

console.log();