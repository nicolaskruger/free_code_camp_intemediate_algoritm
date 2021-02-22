/**
 * 
 * @param  {number[]} args 
 */
function addTogether(...args) {
    return (!args.every(t=>typeof t =='number'))?undefined:
            args.length==1?(n)=>typeof n == 'number'?args[0]+n:undefined:
            args.reduce((acc,curr)=>acc+curr,0);
}
  
let ret =  addTogether(2,3);