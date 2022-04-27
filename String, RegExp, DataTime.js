//...............1...................





var reG = /\w{3}\s/g;
var strGG = "ahb acb aeb aeebadcbaxeb";
var myArrayG = strGG.match(reG);
console.log(myArrayG);

var re = /\a\w\b/g;
var strG = "ahb acb aeb aeebadcbaxeb";
var myArray = strG.match(re);
console.log(myArray);


//...............2....................
const Regexp = /\d\+\d/;
const str = '2+3 223 2223';
const result = str.match(Regexp);

console.log(result);

//...............3....................
var day = (new Date()).getDate();
console.log(day);

var month = ((new Date()).getMonth()+1);
console.log(month);

var year = (new Date()).getFullYear();
console.log(year);
