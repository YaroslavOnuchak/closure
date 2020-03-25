function sequence(startNumber = 0, step = 1) {
    function innerFunction() {
        let y = startNumber
        startNumber += step;
        return y;
    }
    return innerFunction;
}

function take(fn, count) {
    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push(fn())
    }
    return arr;
}
let two = sequence(3, 5);
console.log(two())
console.log(two())
var gen2 = sequence(0, 2);
console.log(take(gen2, 5));