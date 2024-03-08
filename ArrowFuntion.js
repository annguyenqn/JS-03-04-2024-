// funtion có hỗ trợ arguments
// const hello = function () {
//     console.log(arguments);
// }
// hello('an', 'hi', 1)
// callback funtion
// setTimeout(() => {
//     console.log('hello');
// }, 5000)
///arrow funtion là anoynymous funtion không thể đặt tên chon nó, 
// const name = () => {
//     console.log('hello');
// }
/////
// const me = {
//     name: 'An',
//     talk: function () {
//         return this
//     },
//     ArrowTalk: () => {
//         return this
//     }
// }
// console.log(me.talk());
//output :  
// {
//     name: 'An',
//     talk: [Function: talk],
//     ArrowTalk: [Function: ArrowTalk]
// }
// console.log(me.ArrowTalk());
//output: windown
// this trong arrow funtion ko dc bind voi obj goi no
//Arrow function không tạo ra một this mới; thay vào đó, nó sử dụng this của ngữ cảnh bên ngoài nó (lexical scoping).
// Điều này làm cho arrow function thích hợp để tránh các vấn đề với this khi sử dụng trong các ngữ cảnh như callback functions hoặc các tác vụ không đồng bộ.
function RegularFunction() {
    this.value = 42;

    this.getValue = function () {
        console.log(this.value);
    };
    // Sử dụng setTimeout với arrow function để giữ giá trị của this
    setTimeout(() => {
        console.log("Inside RegularFunction setTimeout:", this.value); // Giá trị của this là đối tượng được tạo bởi RegularFunction
    }, 1000);
}

const regularInstance = new RegularFunction();
regularInstance.getValue(); // Kết quả: 42