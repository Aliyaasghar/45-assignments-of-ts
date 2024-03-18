// name array
let guestlist1:string[] =[ "grand parents", "uncle aunt", "mamu"];
// cannot make dinner
let cannotAttend:string="grand parents";

console.log(`${cannotAttend} can not make it ,for dinner`);
// invite new guest
let newGuest:string="muniza";
guestlist1[guestlist1.indexOf(cannotAttend)]=newGuest;
console.log(guestlist1);

// • Print a second set of invitation messages, one for each person who is still in your list.

guestlist1.map((item)=>console.log(`Hey ${item} you are invited to dinner`));