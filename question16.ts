// modifying array
// name array
let guestlist11:string[] =[ "grand parents", "uncle aunt", "mamu"];
// cannot make dinner
let cannotAttend1:string="grand parents";
// invite new guest
let newGuest11:string="muniza";

// • Print a second set of invitation messages, one for each person who is still in your list.

console.log("welcome all we found a bigger dinner table");
guestlist11.unshift("areasha");
let middle_guest:string="sana";
let middleindex = guestlist11.length/2;
// splice method
guestlist11.splice(middleindex,0,middle_guest);
console.log(guestlist11);
// push method
guestlist11.push("noor");
guestlist11.map((item)=>console.log(`\nDear ${item} you are invited to dinner!`));




