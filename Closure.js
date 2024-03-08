function human(n) {
    const name = n
    function sayHi() {
        console.log(`hi i am ${name}`);
    }
    function howoldAreu(age) {
        console.log(`hi ${name} i amn  ${age} year old`);
    }
    return {
        sayHi,
        howoldAreu,
    }
    //hàm nội bộ (inner function) có thể truy cập và "ghi nhớ" ngữ cảnh (context) của hàm bên ngoài nó,
    // bao gồm cả biến và tham số của hàm bên ngoài.
    // cả 2 funtion đều có thể truy cập đến biến name bên ngoài
}
const an = human('an')
an.sayHi();
an.howoldAreu(12)


