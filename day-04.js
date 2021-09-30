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

//http://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls){
  let bag=[], world = ['Hello Kitty','Barbie doll'];
    for (let i of dolls) {
      if (! world.includes(i))
        continue;
      bag.push(i);
      if (bag.length === 3)
        break;
    }
  return bag;
}
