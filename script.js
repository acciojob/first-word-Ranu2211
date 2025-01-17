function firstWord(s) {
  // your code here
	let temp = s.trim();
   if(!temp || !temp.includes(' '))
	   return temp;

let ind = temp.indexOf(' ');
return temp.slice(0,ind);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
