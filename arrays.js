

// 1) Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let movie = ["Don't look up", "Kill Bill", "The Social Networking"];
alert( movie ); // Don't look up, Kill Bill, The Social Networking





//..................2...........................
//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let cars = ["BMW", "Mercedez-benz", "Audi"];

alert( cars[0] ); // BMW
alert( cars[1] ); // Mercedez-benz
alert( cars[2] ); // Audi
alert(cars);





//..................3.............................
//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let friends = [ 'Lili', 'Bill', 'Feyra'];

alert( friends[0] +' hello');
alert( friends[1] +' hello');
alert( friends[2] +' hello');




//..................4.............................
//Преобразовать числовой массив в Boolean
let sum = 10;

while (true) {

    let value = +prompt("Введите число", '');

    if (!value) break;

    sum += value;

}
alert( 'Сумма: ' + sum );




//..................5.............................
let numbers = [1,6,7,8,3,4,5,6];
 numbers.sort(function(b, a) {
   return a - b;
 });



//..................6.............................
let i = [1,6,7,8,3,4,5,6]
while (i < 3) {
    alert( i );

}

//..................7.............................
let lengths = ["Leila", "Anna", "Madi"].map(item => item.length);
alert(lengths);






//..................8.............................
let a = 15;
while (a !== 10) { // когда i будет равно 0, условие станет ложным, и цикл остановится
    alert( a );
    i--;
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