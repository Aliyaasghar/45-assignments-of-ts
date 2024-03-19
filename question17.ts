// modifying array
// name array
let guestlist12:string[] =[ "grand parents", "uncle aunt", "mamu"];
// cannot make dinner
let cannotAttend2:string="grand parents";
// invite new guest
let newGuest12:string="muniza";

// • Print a second set of invitation messages, one for each person who is still in your list

console.log("welcome all we found a bigger dinner table");
guestlist12.unshift("areasha");
let middle_Guest:string="sana";
let middleIndex = guestlist12.length/2;
// splice method
guestlist12.splice(middleIndex,0,middle_Guest);
console.log(guestlist12);
// push method
guestlist12.push("noor");
console.log(guestlist12)
// guestlist12.map((item)=>console.log(`\nDear ${item} you are invited to dinner!`));

console.log("we can invite only two people for dinner");
while(guestlist12.length>2){
   let removeguest= guestlist12.pop();
    console.log(`\nsorry ${removeguest} we can't invite you to dinner!`);
};
guestlist12.map((item)=>console.log(`Hey\n ${item} you are still invited to dinner`));

guestlist12.pop();
guestlist12.pop();
console.log(guestlist12);







