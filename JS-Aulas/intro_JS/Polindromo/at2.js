function substituiPares(array) {
    if (!array) return "Coloque um Array";
    if (!array.length) return "O Array não pode estar vazio";


    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("voçê já é zero");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituiPares([])); 