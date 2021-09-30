//http://www.codewars.com/kata/5721a78c283129e416000999


function pickIt(arr){
  var odd=[],even=[];
  for (let i of arr){
   i % 2 === 0 ? even.push(i): odd.push(i);
  } //coding here
  
  
  return [odd,even];
}


// http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
  let i = 1;
  do {
    i % 2 === 1 ? str = '*' + str : str += '*';
    i++;
  } while (i <= n)
  return str;
}
