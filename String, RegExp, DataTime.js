//...............1...................
let strk = "ahb acb aeb aeeb adcb axeb";

let result = strk.match(/ahb/);
let result2 = strk.match(/acb/);
let result3 = strk.match(/aeb/);

alert( result);
alert( result2);

alert( result3);




//...............2....................
let str = '2+3 223 2223';
let regexp = /(...)/g;

let matchAll = str.matchAll(regexp);

matchAll = Array.from(matchAll)

let firstMatch = matchAll[0];
alert( firstMatch[0] );


//...............3....................
let date = new Date();

alert( date.getDate()+' Day' );
alert( date.getMonth()+' Month' );
alert( date.getFullYear()+' Year' );