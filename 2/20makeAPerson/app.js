var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let myFirst;
    let myLast;
    this.getFullName = function() {
      return [myFirst,myLast].join(' ');
    };
    this.getFirstName = function(){
        return myFirst;
    }
    this.getLastName = function(){
        return myLast;
    }
    this.setFirstName = function(first){
        if(typeof first == "string")
        myFirst = first;
    }
    this.setLastName = function(last){
        if(typeof last == "string")
        myLast = last;
    }
    this.setFullName = function(firstAndLast){
        if(typeof firstAndLast == "string")
        [myFirst,myLast] = firstAndLast.split(' ');
    }
    return this.setFullName(firstAndLast);
  };
  
  var bob = new Person('Bob Ross');
  bob.setFirstName("Haskell");
  let val = bob.getFullName();
  console.log();
