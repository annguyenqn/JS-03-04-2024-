// khi hàm trả về promise thì sử dụng aync await
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
                resolve(result + " " + "ASYNC");
            } else {
                reject("Input không phải là chuỗi");
            }
        }, 1000);
    });
}
// Sử dụng async/await để chuyển đổi từ Promise sang đồng bộ
async function processData() {
    try {
        const uppercasedText = await toUpperCaseAsync("hello");
        console.log("Kết quả từ Promise 1:", uppercasedText);
        const finalResult = await addWorldAsync(uppercasedText);
        console.log("Kết quả từ Promise 2:", finalResult);
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
// Gọi hàm processData
processData();