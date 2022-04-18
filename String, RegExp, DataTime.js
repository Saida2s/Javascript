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

/////


//...............1...................
var str = 'ahb acb aeb aeeb adcb axeb'.replace(/a\w\b\s/);;
console.log(str)


let text='ahb acb aeb aeeb adcb axeb'
console.log(text.slice(0,11))




//...............2....................
const RegExp=/\d\+\d/
const str='2+3 223 2223'
const result=str.match(RegExp)

console.log(result)

//...............3....................
var day = (new Date()).getDate();
console.log(day);

var month = (new Date()).getMonth();
console.log(month);

var year = (new Date()).getFullYear();
console.log(year);
