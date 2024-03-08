//-------------------Set------------------
// const myArr = [1, 2, 3, 4, 5, 2, 4, 3, 3]
// const setArr = new Set(myArr)

// console.log('this is myArr:', myArr); //output : [ 1, 2, 3, 4, 5, 2, 4, 3, 3 ]
// set sẽ loại bỏ các trùng lặp 
// console.log('this is setArr:', setArr); //output: Set(5) { 1, 2, 3, 4, 5 }

// const uniqueArr = [...setArr];
// console.log('this is unique arr', uniqueArr); //output : [ 1, 2, 3, 4, 5 ]

//Add thêm 1 phần tử vào
// setArr.add(6);
// console.log('this is setArr:', setArr);  //output: Set(6) { 1, 2, 3, 4, 5, 6 }
//delete xóa 1 phần tử 
// setArr.delete(6);
// console.log('this is setArr:', setArr);//output: Set(5) { 1, 2, 3, 4, 5 }
//clear  clear set:
// setArr.clear();
// console.log('this is setArr:', setArr); // output:  Set(0) {}
// has  : trả về kiểu boolean rằng tham số truyền vào có trong set hay ko, có thì true không thì false
// console.log('this is setArr:', setArr.has(5));//output: true
//Size: trả về kích thước của set
// console.log('this is set size', setArr.size);//output : 5

//khác biệt giữa array và set .
// array thì các phần tử xếp lần lượt theo chỉ mục và có thể truy cập các phần tử đó thông qua chỉ mục
// trong set các phần tử là duy nhất và không có thứ tự vì nó không có thứ tự nên không có chỉ mục để có thể truy cập các phần tử của nó

//Khi nào sử dụng set thay vì arr.
// khi ta muốn lưu trữ data không trùng lặp 

// -----------------------------Map-------------------------
// js object chỉ hỗ trong one key object nếu ta add multiple key object thì nó chỉ nhớ đối tượng cuối cùng, nên tả mới phải dùng map

// const myMap = new Map([
//     ['name', 'An'],
//     ['age', 20],
//     ['language', 'Js']
// ])
// set: thêm 1 cặp key value
// myMap.set('university', 'QN')
// delete: delete 1 cặp key value
// param: key
// myMap.delete('university');
// clear: clear map
// has: tim key
// console.log('this is my map', myMap.has('age'));
// console.log('this is my map', myMap.size);


// ------CODE VÍ DỤ KHÔNG SỬ DỤNG MAP---------------
// Khởi tạo các mảng lưu trữ thông tin sinh viên và điểm số
const studentNames = ["Alice", "Bob", "Charlie"];
const studentScores = [85, 90, 78];

// Tìm điểm của sinh viên theo tên
// function findScoreWithoutMap(studentName) {
//     const index = studentNames.indexOf(studentName);
//     return index !== -1 ? studentScores[index] : "Không tìm thấy sinh viên";
// }

// const resultWithoutMap = findScoreWithoutMap("Bob");
// console.log(resultWithoutMap);
// ------CODE VÍ DỤ SỬ DỤNG MAP---------------
// Khởi tạo Map để lưu trữ thông tin sinh viên và điểm số
// const studentScoresMap = new Map([
//     ["Alice", 85],
//     ["Bob", 90],
//     ["Charlie", 78]
// ]);

// // Tìm điểm của sinh viên theo tên sử dụng Map
// function findScoreWithMap(studentName) {
//     return studentScoresMap.has(studentName) ? studentScoresMap.get(studentName) : "Không tìm thấy sinh viên";
// }

// const resultWithMap = findScoreWithMap("Charlie");
// console.log(resultWithMap);

