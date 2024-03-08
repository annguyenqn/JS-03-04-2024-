function fetchData(callback) {
    setTimeout(() => {
        console.log("Thức dậy");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Nấu ăn");
        callback();
    }, 1000);
}

function eating(callback) {
    setTimeout(() => {
        console.log("Ăn sáng");
        callback();
    }, 1000);
}

function working() {
    setTimeout(() => {
        console.log("Đi làm");
    }, 1000);
}

// eating(() => working())
// Callback Hell
fetchData(() => {
    processData(() => {
        displayData(() => {
            working();
        });
    });
});
