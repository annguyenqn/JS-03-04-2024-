// Hàm trả về một Promise với kết quả là chuỗi được chuyển đổi thành chữ hoa
function toUpperCaseAsync(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof text === 'string') {
                resolve(text.toUpperCase());
            } else {
                reject("Input không phải là chuỗi");
            }
        }, 1000);
    });
}
// Hàm sử dụng kết quả của Promise trước để thực hiện một tác vụ khác
function addWorldAsync(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof result === 'string') {
                resolve(result + " " + "WORLD");
            } else {
                reject("Input không phải là chuỗi");
            }
        }, 1000);
    });
}
// Sử dụng Promise để truyền kết quả từ Promise này sang Promise khác
toUpperCaseAsync("hello")
    .then(uppercasedText => {
        console.log("Kết quả từ Promise 1:", uppercasedText);
        return addWorldAsync(uppercasedText);
    })
    .then(finalResult => {
        console.log("Kết quả từ Promise 2:", finalResult);
    })
    .catch(error => {
        console.error("Lỗi:", error);
    });