// Com o This

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function (item) {
        return item * this.value;
    }, laranja);
}


console.log(mapArray( laranja));

// Sem o This

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));