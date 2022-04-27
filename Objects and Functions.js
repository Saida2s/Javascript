

const person = new Object({
    name: "Car",
    color: "Black",
    power: "190",
});

console.log(person);



//...............................................

function sum(apple, pineapple) {
    return apple + pineapple;
  }

  let result1 = sum(5, 10);
  console.log( result1 ); // 15

//...............................................
let users = prompt('Введите ваше имя'), Saida;

function checkName(){
if ( user () ) {
    alert( 'Hi!'+users );
} else {
    alert( 'Доступ закрыт' );
}
}


//......................................

var square = function(number) { return number * number; };
var x = square(5); 
console.log(x)

//......................................

function tNum(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}
tNum[1,2,3,4,5,6,7,8,9]
console.log(num(i))
//////////////////////////////////////////////

function isPrime(num){
  for (var i = 2; i < num; i++) {
      if (num%i==0)return false;
          return num >=2;
      
  }
  return true;
}
console.log(isPrime);
