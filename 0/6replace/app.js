/**
 * 
 * @param {string} str 
 * @param {string} before 
 * @param {string} after 
 */
function myReplace(str, before, after) {
    if(/[A-Z]/.test(before[0]))
        after = after[0].toUpperCase() + after.substr(1);
    else
        after = after[0].toLowerCase() + after.substr(1);
    return str.replace(before,after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");