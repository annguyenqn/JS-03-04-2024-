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

// console.log(me.talk()); //output : my name is An
// console.log(me2.talk()); //output: my name is An2


// các phương thức call, bind, và apply được sử dụng để thay đổi ngữ cảnh của từ khóa this trong một hàm. 
function sayHello(arr) {
    console.log(`hello ${this.name} ${arr}  `);
}

const An = { name: 'An' }
const args = ['Alice'];
// arg đầu của call là giá trị mà muốn gán cho this trong hàm, còn lại là các đối số
// sayHello.call(An, 1, 2)
//Apply: Tương tự như call, apply cũng gắn một ngữ cảnh cụ thể cho từ khóa this,
//nhưng nó nhận một mảng các đối số thay vì danh sách các đối số riêng lẻ.
//Cú pháp của apply là function.apply(thisArg, [argsArray]).
//phương thức bind được sử dụng để gắn một ngữ cảnh cụ thể cho từ khóa this của một hàm và trả về một hàm mới với ngữ cảnh đó.
// sayHello.apply(An, args)

const num = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = num.getX;
console.log(unboundGetX()); // Output: undefined

const boundGetX = num.getX.bind(num);
console.log(boundGetX()); // Output: 42




