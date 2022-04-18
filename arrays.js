

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

var friends= ["Bill","Lili","Sam"];
for (var ip=0; ip<friends.length; ip++) {
    console.log(friends[ip])
}


//..................5.............................
let numbers = [1,6,7,8,3,4,5,6];
 numbers.sort(function(b, a) {
   return a - b;
 });



//..................6.............................
const nums= [1,6,7,8,3,4,5,6]
const filtered = nums.filter(function(value){
    return value >3;
});
console.log(filtered)


//..................7.............................
let lengths = ["Leila", "Anna", "Madi"].map(item => item.length);
console.log(lengths);






//..................8.............................
for (var il=20; il>10; il--) {
console.log(il)
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
const nmbrs=[1,2,3,4,5];
const filtereD=nmbrs.filter(function(value){
    return value%2 === 0;

});
console.log(filtered)