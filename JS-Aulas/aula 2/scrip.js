//tipos primitivos

// boolean
var VouF = false;
console.log (typeof(VouF));

//number
var numberoQualquer= 1;
console.log(typeof(numberoQualquer))

//string
var nome= 'rafael';
console.log(typeof(nome))

///como declarar
var variavel = 'rafael';
variavel = 'josevaldo';
console.log(variavel) 

let variavel2 = 'marinez';
variavel2 = 'rodrigo'
console.log(variavel2)

const constante= 'renata';
console.log(constante)

var escopoglobal = 'global';
console.log(escopoglobal);

function escopolocal(){
    let escopoLocalInterno = 'Local';
     console.log(escopoLocalInterno); 
}

escopolocal();
