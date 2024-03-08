//Rest Parameters cho phép truyền một số lượng biến không xác định của đối số vào hàm dưới dạng một mảng.
// Sử dụng Rest Parameters để tính tổng các số được truyền vào hàm
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
//Spread Operator, cũng là ..., được sử dụng để "bóc tách" một mảng hoặc đối tượng thành các phần tử riêng lẻ.// Sử dụng Spread Operator để nối hai mảng lại với nhau
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
