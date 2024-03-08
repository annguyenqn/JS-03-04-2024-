// Tham trị - Primitive Types
//giá trị của biến được truyền vào hàm, và một bản sao của giá trị đó được tạo ra.
// Thay đổi giá trị trong hàm không ảnh hưởng đến giá trị bên ngoài hàm.
let a = 5;

function increment(value) {
    value++;
    console.log(value);  // 6
}

increment(a);
console.log(a);  // 5 (giá trị của 'a' không thay đổi)


// -----------------Tham chiếu--------------
// Tham chiếu - Reference Types
//Trong trường hợp tham chiếu, một địa chỉ bộ nhớ của đối tượng được truyền vào hàm
//và do đó, các thay đổi được thực hiện trong hàm sẽ ảnh hưởng đến đối tượng bên ngoài hàm.
let obj = { value: 10 };

function incrementObject(objRef) {
    objRef.value++;
    console.log(objRef.value);  // 11
}

incrementObject(obj);
console.log(obj.value);  // 11 (đối tượng 'obj' bị thay đổi)

