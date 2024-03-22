var createHelloWorld = function () {

    return function (...[]) {
        console.log('Hello Wold')
    }
};
const f = createHelloWorld();
f(); 