
//Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move, реализовать и через прототипы и через классы.


const animal= new Object({
    name: name
})

Object.prototype.features=function(){
    console.log('move')
}

let cat;
cat = Object.create(animal);


class Cat extends Animal {
    hide() {
        alert(`${this.name} Hide!`);
    }
}

let cat = new Cat("White cat");

cat.run(5);
cat.hide();
cat.sitting();
