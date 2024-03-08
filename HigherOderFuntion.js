// HigherOderFuntion là funtion mà accept làm tham số của nó
// hoặc return 1 funtion sau khi thực hiện xong những gì nó phải làm
const name = [
    'An',
    'Anh',
    'Minh',
    'Ahh',
    'Hung',
    'Tan'
]
const filterName = name.filter(function (n) {
    if (n[0] === 'A') {
        return false
    }
    return true
})
console.log('this is filter name', filterName);