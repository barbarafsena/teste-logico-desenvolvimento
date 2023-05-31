// Programa que imprima os números de 1 a 10 em ordem crescente

function numOrdemCrescente() {
    let num = 1;

    for (num = 1; num <= 10; num++) {

        let respTabela = document.getElementById('resultadoNumDecresc');
        respTabela.innerHTML += `${num}\n`;

    }

}




//função que receba uma lista de números e retorne a média aritmética desses números

function listaNumeros() {

    var listaNumeros = [];

    lista = document.querySelector("#listaNumeros").value;
    var inputTexto = document.querySelector("#listaNumeros");
    inputTexto.value = ""; // Limpa o valor do input


    let respLista = document.getElementById('respLista');


    listaNumeros = lista.split(',').map(Number);

    var somaNumeros = 0;

    var mediaNumeros = 0;

    for (var i = 0; i < listaNumeros.length; i++) {

        somaNumeros += listaNumeros[i];
    }

    mediaNumeros = somaNumeros / listaNumeros.length;


    respLista.innerHTML += `Os números são: ${listaNumeros}\n e a média é ${mediaNumeros}`
}



// Função para verificar se uma palavra é um palíndromo

function palindromo() {

    palavra = document.querySelector("#palavraQualquer").value;

    var inputTexto = document.querySelector("#palavraQualquer");
    inputTexto.value = ""; // Limpa o valor do input

    var respPalindromo = document.getElementById('respPalindromo');

    if (palavra.trim() === "") {
        respPalindromo.innerHTML = "Digite alguma coisa.";
    } else {

        palavraInvertida = palavra.split('').reverse().join('');

        palavra.toLowerCase() === palavraInvertida.toLowerCase() ?

            respPalindromo.innerHTML = "É um palíndromo" :
            respPalindromo.innerHTML = "Não é um palíndromo";
    }
}


// Sequencia de Fibonacci 

function SequenciaFibonnaci() {

    var listaFibonacci = [];

    listaFibonacci[0] = 0;
    listaFibonacci[1] = 1;

    for (var i = 2; i < 10; i++) {
        listaFibonacci[i] = listaFibonacci[i - 2] + listaFibonacci[i - 1];
    }

    respFibonacci.innerHTML = `A sequência de Fibonnaci até o 10º termo é: ${listaFibonacci}`;
}



// Contador de caracteres

function ContadorDeCaracteres() {

    texto = document.querySelector("#texto").value;

    var inputTexto = document.querySelector("#texto");
    inputTexto.value = ""; // Limpa o valor do input

    listaPalavras = texto.split(' ');

    var contador = 0;

    if (texto == "") {
        respContadorPalavras.innerHTML = "Digite alguma coisa";
    } else {

        for (var i = 0; i < listaPalavras.length; i++) {

            contador++;

        }

        respContadorPalavras.innerHTML = `A quantidade de palavras digitadas foi: ${contador} palavras`;
    }
}


// Inversor de palavras

function InversorDeCaracteres() {

    texto = document.querySelector("#textoNormal").value;

    var inputTexto = document.querySelector("#textoNormal");
    inputTexto.value = ""; // Limpa o valor do input

    if (texto == "") {
        respTextoInvertido.innerHTML = "Digite alguma coisa";
    } else {

        textoInvertido = texto.split('').reverse().join('');

        respTextoInvertido.innerHTML = `Olha só a inversão: ${textoInvertido}`;
    }
}


//função que receba uma lista de números e retorne apenas os números pares

function listaNumerosPares() {

    var listaNumeroUsuario = [];

    var listaNumerosPares = [];

    listaRecebeValores = document.querySelector("#listaNumeroUsuario").value;

    // Verifica se o input está vazio
    if (listaRecebeValores === "") {
        respNumerosPares.innerHTML = "Digite alguma coisa";
        return;
    }

    listaNumeroUsuario = listaRecebeValores.split(',').map(Number);

    var inputTexto = document.querySelector("#listaNumeroUsuario");
    inputTexto.value = ""; // Limpa o valor do input

    if (listaNumeroUsuario.length === 0) {
        console.log("Digite algo");
    } else {
        var restoNumeros = 0;

        for (var i = 0; i < listaNumeroUsuario.length; i++) {

            restoNumeros = listaNumeroUsuario[i] % 2;

            if (restoNumeros === 0) {
                listaNumerosPares.push(listaNumeroUsuario[i]);



            }
        }



        respNumerosPares.innerHTML = `Os números pares são: ${listaNumerosPares}`;

    }




}
