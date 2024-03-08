//this dựa vào đg gọi đến nó ở đây là me  và me2 
function talk() {
    return `my name is ${this.name}`
}
const me = {
    name: 'An',
    talk
}
const me2 = {
    name: 'An2',
    talk
}
function a() {
    // console.log(this);
}
console.log(me.talk()); //output : my name is An
console.log(me2.talk()); //output: my name is An2
