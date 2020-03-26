function sequence(startNumber = 0, step = 1) {
    return function () {
        let val = startNumber
        startNumber += step;
        return val;
    }
}

function take(fn, count) {
    let arr = []
    while (arr.length < count) {
        arr.push(fn())
    }
    return arr;
}

let two = sequence(3, 5);
console.log(two())
console.log(two())
var gen2 = sequence(0, 2);
console.log(take(gen2, 5));