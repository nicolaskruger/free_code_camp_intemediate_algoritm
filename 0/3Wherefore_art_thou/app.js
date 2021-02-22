/**
 * 
 * @param {[]} collection 
 * @param {*} source 
 */
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    arr = collection.filter(s=>Object.keys(source)
                                .every(k=>s[k]==source[k]))
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });