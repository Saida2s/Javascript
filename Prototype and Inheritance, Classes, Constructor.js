const animal= new Object({
    name: name
})

Object.prototype.features=function(){
    console.log('move')
}

let cat;
cat = Object.create(animal);
