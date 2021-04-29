var nome = "Vinicius Grippa";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

//var idade = prompt("Qual a sua idade?");
var idade = 18;
var count = 0;

var fruta = {nome:"maça", cor:"vermelha"};
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop();

var d = new Date();


//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());

console.log(lista);
console.log(lista[2]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

console.log(fruta);
console.log(fruta.cor);
console.log(frutas[1].nome);

if (idade >= 18) {
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

/*
while (count < 5) {
    console.log(count);
    count++;
}
*/

for (count = 0; count <= 5; count++){
    console.log(count);
}

console.log(d);
console.log(d.getMonth()+1);
console.log(d.getMinutes());

function soma(n1,n2) {
    return n1+n2;
}

console.log(soma(5,10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
    
    var validar;

    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    var idade = 20;
    
    return validar
}

console.log(validaIdade(idade));
//Comentário de Linha

/* 
    Comentário de bloco
*/


