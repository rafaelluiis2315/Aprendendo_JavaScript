function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(`primeiro: ${filtraPares(meuArray)}` );

// função dentro de função

function filtraPares2(arr) {
    return arr.filter(function callback(item) {
        return item % 2 !== 0;
    });
}


const meuArray2 = [1, 23, 55, 67, 30, 2, 4];

console.log(`segundo: ${filtraPares2(meuArray2)}`);

// Com Arrow function || função encurtada

function filtraPares3(arr) {
    return arr.filter(callback = (item) =>
        item % 2 === 0);
}


const meuArray3 = [1, 23, 55, 67, 30, 2, 4];

console.log(`terceiro: ${filtraPares3(meuArray3)}`);