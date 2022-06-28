function calculadora() {
    const operacao = Number(prompt('escolha uma operção: \n 1 - soma (+) \n 2 - subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('operção invalida');
        calculadora()
    } else {
        let n1 = Number(prompt('insira o primeiro valor'));
        let n2 = Number(prompt('insira o segundo valor '));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
        function subtração() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
        }
        function mutiplicação() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
        }
        function diviçãoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
        }
        function diviçãoInteira() {
            resultado = n1 % n2;
            alert(`O resto da nossa divisão ${n1} % ${n2} = ${resultado}`)
        }
        function Pontencia() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} = ${resultado}`)
        }

        function novaOperacao() {
            let opcao = prompt('deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não')
            if (opcao == 1) {
                calculadora()
            } else if (opcao == 2) {
                alert('até nunca mais');
            } else {
                alert('digite uma opção valida')
                novaOperacao();
            }
        }

        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtração();
        } else if (operacao == 3) {
            mutiplicação();
        } else if (operacao == 4) {
            DivisãoReal();
        } else if (operacao == 5) {
            divisãoInteira();
        } else if (operacao == 6) {
            potenciação();
        }
    }



}

calculadora();