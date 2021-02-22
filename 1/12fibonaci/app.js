function sumFibs(num) {
    let fib = [1,1];
    let store = num<1?0:1
    while(fib[1]<=num){
        if(fib[1]%2==1)
            store+=fib[1]
        fib = [fib[1],fib[0]+fib[1]];
    }
    return store;
  }
  
  console.log(sumFibs(4));