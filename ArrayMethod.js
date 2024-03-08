const number = [1, 2, 3, 4, 5];
// -------ForEach--------
//forEach được sử dụng để lặp qua từng phần tử của mảng và thực hiện một hàm callback cho mỗi phần tử mà không tạo ra một mảng mới.
//forEach không trả về giá trị. Nó chỉ thực hiện một hàm cho mỗi phần tử của mảng.
// console.log("Sử dụng forEach:");
// numbers.forEach((value, index) => {
//     console.log(`Phần tử thứ ${index}: ${value * 2}`);
// });
// ----------Map--------
//map được sử dụng để tạo ra một mảng mới bằng cách thực hiện một hàm callback cho mỗi phần tử của mảng
//map trả về một mảng mới chứa kết quả của việc thực hiện hàm callback trên từng phần tử.
// Sử dụng map để tạo ra mảng mới chứa giá trị nhân đôi của mỗi phần tử
// console.log("Sử dụng map:");
// const doubledNumbers = numbers.map((value, index) => {
//     return value * 2;
// });
// console.log(doubledNumbers);
// ----------So sánh----------
// forEach không tạo ra mảng mới, chỉ thực hiện một hàm cho mỗi phần tử.
// map tạo ra một mảng mới từ kết quả của việc thực hiện hàm callback trên từng phần tử.
// Nếu chỉ muốn lặp qua mảng và không quan tâm đến giá trị trả về, hãy sử dụng forEach.
// Nếu muốn tạo ra một mảng mới từ việc biến đổi các phần tử của mảng cũ, hãy sử dụng map.
const number2 = [1, 2, 3, 4, 5, '6'];
// --------Incldue---------
// return về kết quả kiểu boolean kiểm tra param có trong array ko 
// console.log(number2.includes('6'));
// -------Filter---------
// Phương thức này được sử dụng để tạo ra một mảng mới chứa các phần tử thỏa mãn một điều kiện được xác định trong hàm callback.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // --------Filter------------
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });
// console.log(evenNumbers); // Kết quả: [2, 4, 6, 8, 10]
const items = [
    { name: 'Bike', price: 400 },
    { name: 'Car', price: 3000 },
    { name: 'Tv', price: 500 },
    { name: 'Phone', price: 600 },
    { name: 'Book', price: 30 },
    { name: 'Computer', price: 2000 }
]
const itemFilter = items.filter((item) => { return item.price < 600 });
const itemMap = items.map((item) => { return item.name })
// find chỉ trả về phần tử đầu tiên được tìm thấy, nếu không tìm thấy nó trả về undefined
const itemFind = items.find((item) => { return item.name === 'Car' })
// some kiểm tra ít nhất 1 phần tử trong mảng thỏa đk trả về true or false, nếu thỏa đk thì nó trả về true else false
const itemSome = items.some((item) => { return item.price > 3000 }) //true
// every tương tự some nhưng kiểm tra tất cả phần tử trong mảng có thỏa đk ko
const itemEvery = items.every((item) => { return item.price > 2000 }) //false
//reduce sử dụng để thu gọn một mảng thành một giá trị duy nhất dựa trên các phần tử trong mảng đó. 
//Nó thường được sử dụng để tính tổng, tích, hoặc thực hiện các phép tính phức tạp hơn trên các phần tử của mảng.
const itemReduce = items.reduce((currentTotal, item) => { return item.price + currentTotal }, 0) //false


