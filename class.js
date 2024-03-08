class human {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name;
    }
    sayHi() {
        console.log(`hi my name is ${this.name}`);
    }
}
let me = new human('An')
me.sayHi();
console.log('this is name', me.getName());