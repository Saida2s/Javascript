

// 1) Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
var arr= ["Don't look up", "Kill Bill", "The Social Networking"];
var eArr = arr.values();
for (let letter of eArr) {
    console.log(letter);
}





//..................2...........................
//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
var cars = ["BMW", "Mercedez-benz", "Audi"];
var arre = cars.values();
for (let letter of arre) {
    console.log(letter);
}






//..................3.............................
//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
var ss = [ 'Lili', 'Bill', 'Feyra'];
var h =[' Hello']

console.log( ss[0] +h);
console.log( ss[1] +h);
console.log( ss[2] +h);

while (ss < 3) {
    ss++;
    h += ss;
}

//..................4.............................
//Преобразовать числовой массив в Boolean
const array = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime));



//..................5.............................
let numbers = [1,6,7,8,3,4,5,6];
 numbers.sort(function(b, a) {
   return a - b;
 });



//..................6.............................
let i = [1,6,7,8,3,4,5,6]
while (i < 3) {
    console.log( i );

}

//..................7.............................
let lengths = ["Leila", "Anna", "Madi"].map(item => item.length);
console.log(lengths);






//..................8.............................
let a = 15;
for (a !== 10) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    alert( a );
    i--;
}

for (let value of iterable) {
    value += 1;
    console.log(value);
  }


//..................9.............................
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j === 0) continue nextPrime; // не подходит, берём следующее
        }

        alert( i ); // простое число
    }


//..................10............................
let num = 0;
while(num<10){
    num++;
    if(num%2) console.log(num);
}
