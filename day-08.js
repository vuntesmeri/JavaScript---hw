// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n){
  switch (true) {
      case Number(n) === Number.MAX_VALUE:
        return "Input number is Number.MAX_VALUE";
   
      case Number(n) === Number.MIN_VALUE:
        return "Input number is Number.MIN_VALUE";
    
     case isNaN(Number(n)):
        return "Input number is Number.NaN";
     
      case Number(n) === Number.NEGATIVE_INFINITY:
        return "Input number is Number.NEGATIVE_INFINITY";
 
      case Number(n) === Number.POSITIVE_INFINITY:
        return "Input number is Number.POSITIVE_INFINITY";
    
      default:
        return `Input number is ${Number(n)}`;
      
      
  // https://www.codewars.com/kata/57238ceaef9008adc7000603
      
      function colorOf(r,g,b){
  let color = [r,g,b];
  let webcolor = "";
  for (let i of color) {
    i.toString(16).length === 2 ? webcolor += i.toString(16) : webcolor += ("0" + i.toString(16)); 
  }
  return "#" + webcolor;
}
 
//  http://www.codewars.com/kata/57256064856584bc47000611  
function howManySmaller(arr,n){
  let countElement = 0
  for (let i of arr) {
    i = +i.toFixed(2);
    if (i < n) {
      countElement += 1;
    }
  }  
  return countElement;
}
        
