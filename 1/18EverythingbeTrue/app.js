/**
 * 
 * @param {[]} collection 
 * @param {string} pre 
 */
function truthCheck(collection, pre) {
    return collection.every(s=>s[pre]?true:false);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");