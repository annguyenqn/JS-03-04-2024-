const bookbyid = {
    1: {
        title: "Super Man",
        author: ['Man', 'Sup']
    },
    2: {
        title: "Bat Man",
        author: ['Man', 'Bat']
    },
    3: {
        title: "Iron Man",
        author: ['Man', 'Iron']
    },
    4: {
        title: "Spider Man",
        author: ['Man', 'Spider']
    },
}
function getBook(id) {
    return bookbyid[id];
}
console.log(getBook(4));
