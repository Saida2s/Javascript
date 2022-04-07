//Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move, реализовать и через прототипы и через классы.

class Animal {
    constructor(name) {
        this.canMove = 0;
        this.name = name;
    }
    run(move) {
        this.canMove = move;
        alert(`${this.name} moving with speed ${this.canMove}.`);
    }
    sitting() {
        this.canMove = 0;
        alert(`${this.name} sitting.`);
    }
}


class Cat extends Animal {
    hide() {
        alert(`${this.name} Hide!`);
    }
}

let cat = new Cat("White cat");

cat.run(5);
cat.hide();
cat.sitting();