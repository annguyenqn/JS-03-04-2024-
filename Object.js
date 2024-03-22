// const target = { a: 1, b: 2 };
// const source = { c: 4, d: 5 };
// const mergedObject = Object.assign(target, source);
// console.log(target); // Output: { a: 1, b: 2, c: 4, d: 5 }
// NẾU CÓ CÙNG KEY THÌ NÓ SẼ LẤY KEY CỦA THAM SỐ THỨ 2
// Nó merge tham số thứ 2 và tham số thứ 1

// const getkey = Object.values(source);
// console.log(getkey);  // [ 4, 5 ]

const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]

// const obj = { a: 1, b: 2, c: 3 };
// console.log(obj.hasOwnProperty('b')); // Output: true
// console.log(obj.hasOwnProperty('d')); // Output: false
