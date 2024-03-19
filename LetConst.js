// var,let,const : var là biến toàn cục (global scope), let với const là biến cục bộ khác nhau ở scope( block scope).
// let có thể gán và định nghĩa lại còn const thì không.
// var có hỗ trợ hoisting 2 thằng kia thì k
// khai báo bằng const hiệu quả hơn là let nếu ta biết nó ko cần thay đổi thì bộ nhớ máy tính
// chỉ cần cho nó dung lượng lưu trữ nó cần mà không để dư thừa ra khi ta khai báo let
// Sử dụng var
function exampleVar() {
    for (var i = 0; i < 3; i++) {
        console.log("Inside loop:", i);
    }
    console.log("Outside loop:", i);
}
exampleVar();
// Sử dụng let
function exampleLet() {
    for (let j = 0; j < 3; j++) {
        console.log("Inside loop:", j);
    }
}
exampleLet();
