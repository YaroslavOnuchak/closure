function sequence(startNumber = 0, step = 1) {

    function x() {

        let y = startNumber
        startNumber += step;
        return y;
    }
    return x
}

let two = sequence(3, 5);

console.log(two())
console.log(two())

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(fn, count) {
    let arr = []
    for (let i = 0; i < count; i++) {
        let a = fn()
        arr.push(a)
    }
    return arr;
}