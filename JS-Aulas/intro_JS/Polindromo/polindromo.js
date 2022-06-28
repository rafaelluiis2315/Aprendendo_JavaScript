// solução 1
function verificaPolindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

// Solução 2

function verificaPolindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPolindromo2("gato"));