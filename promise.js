//Promise là 1 object
// Promise có 3 trạng thái: pending, fulfilled, reject
//then() recieve a funtion to be excuted khi fullfilled 
//catch()  recieve a funtion to be excuted khi reject
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Dữ liệu lần 1");
            resolve();
        }, 1000);
    });
}

function processData() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Xử lý dữ liệu");
            resolve();
        }, 1000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Giả định hiển thị dữ liệu thành công hoặc thất bại ngẫu nhiên
            if (success) {
                console.log("Hiển thị dữ liệu");
                resolve();
            } else {
                reject("Lỗi khi hiển thị dữ liệu");
            }
        }, 1000);
    });
}
// Sử dụng Promise để giải quyết callback hell
fetchData()
    .then(() => processData())
    .then(() => displayData())
    .catch(error => console.error("Lỗi:", error));
