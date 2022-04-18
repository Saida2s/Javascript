

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
