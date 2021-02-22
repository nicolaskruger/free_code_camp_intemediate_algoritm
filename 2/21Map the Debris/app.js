/**
 * 
 * @param {{name:string,avgAlt:number}[]} arr 
 */
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    arr.forEach((v,i)=>{
        const orbitT = 2*Math.PI*Math.sqrt(Math.pow(earthRadius + v.avgAlt,3)/GM);
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod = Math.round(orbitT);
    })
    return arr;
  }
  
 const ret = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

 console.log();