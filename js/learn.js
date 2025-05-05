// document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>";
// console.log("oi isso é um console.log")
//declarar variaveis
// var: Pode ser redeclarada e tem escopo de função, não de bloco 
// let: Pode ser reatribuída, mas não redeclarada no mesmo escopo, e tem escopo de bloco
// const: Não pode ser reatribuída nem redeclarada, e também tem escopo de bloco
var pote = "bombom"
//alert(pote);

var a = 2, b = 5, c = 6;
// alert('o valor de c é: ' + c);

nome = "tupac";
sobrenome = "shakur";
nome_completo = nome + " " + sobrenome;
// document.getElementById("texto").innerHTML = nome_completo;

var valor1 = 8, valor2 = "8", igual;
igual = (valor1 == valor2); //true
igual = (valor1 === valor2); //false (true se forem do mesmo tipo e tiverem o mesmo valor)
igual = (valor1 != "8"); //false
igual = (valor1 !== "8"); //true

function soma(valor1, valor2) {
    return valor1 + valor2;
}

// document.getElementById("texto").innerHTML = soma(10, 10);

function alertaHello() {
    // alert("Hello!");
    document.body.style.background = "yellow";
}

// Objetos
// definição
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert('Biiiiiiiiiiiiii'); },
    completo: function () {
        return "A marca é " + this.marca + "e o modelo é " + this.modelo;
    }
}

// document.getElementById("texto").innerHTML = carro.marca;
// document.getElementById("texto").innerHTML = carro["marca"];
// document.getElementById("texto").innerHTML = carro.buzina();
// document.getElementById("texto").innerHTML = carro.completo();

const pessoa = ["Dimitri", "Teixeira", 30];
const pessoa2 = ["Samuel", "Gibson", 20];
pessoa[0];
pessoa.length; // = 3
pessoa.push("Brasileiro") // adiciona um item no final
// alert(Array.isArray(pessoa)); // confirma se é array (nesse caso, devolve true)
pessoa.pop();// tira o ultimo elemento da lista
pessoa.shift();// remove o primeiro elemento da lista
pessoa.unshift("Professor");// adiciona como primeiro elemento algo na lista
delete pessoa[0]; // coloca uundefined no lugar

// document.getElementById("texto").innerHTML = pessoa.join(" | "); // join separa os elementos printados

// array.splice(início, quantidade, item1, item2, ..., itemN);

// usado para alterar o conteúdo de um array, podendo remover, adicionar ou substituir elementos

// Parâmetros:
// início: índice onde a alteração começa (obrigatório).

// quantidade: quantos elementos devem ser removidos a partir do índice (opcional — se for 0, nada será removido).

// item1, item2, ..., itemN: elementos a serem adicionados (opcional).

const fusao = pessoa.concat(pessoa2); // concatena listas

const pessoa_idade = pessoa.slice(2); // devolve uma lista com tudo depois da posição 2 (inclusive) 

const ord = pessoa.sort();// ordena em ordem alfabetica
const ord_dec = pessoa.reverse();// inverte o ord pra ficar decrescente

const nums = [100, 1, 40, 5];

nums.sort(function (a, b) { return a - b }); // pq o ord normal faz em ordem alfabetica

function MaiorNumero(array) {
    return Math.max.apply(null,array);
}

function MenorNumero(array) {
    return Math.min.apply(null,array);
}

// document.getElementById("texto").innerHTML = MaiorNumero(MaiorNumero(nums));

const maior20 = nums.filter(filtragem);

function filtragem(valor){
    return valor>20;
}

// function verificaCor() {
//     let cor = document.getElementById("cor").value;

//     switch(cor) {
//         //semelhante ao ===
//         case "azul":
//             // o que acontece
//             break;

//             case "vermelho":
//                 // o que acontece
//                 break;

//         default:
//         // o que acontece
//         break;
//     }
// }

for(let i = 0;i<101;i++) {
    document.getElementById("texto").innerHTML += i+ ", ";
}

// comando base para pegar data
let data = new Date();
// console.log(data);

// pegar o ano atual
let ano= data.getFullYear();

// pega o mes de 0 a 11
let mes = data.getMonth();
// console.log(mes);

const mesesAno = ["Janeiro","Fevereiro","Março"] //...
let mesNome = mesesAno[mes];

// dia do mes
let diaMes = data.getDate();
// console.log(diaMes);

// dia da semana (segunda, terça, ...), de 0 a 6
let diaSemana = data.getDay();

// de 0 a 23
let hora = data.getHours();

// de 0 a 59
let minutos = data.getMinutes();

// de 0 a 59
let segundos = data.getSeconds();

// de 0 a 59
let miliSegundos = data.getMilliseconds();

// pegar data modo brasileiro
let dataBr = data.toLocaleString('pt-br', {dateStyle: 'short'});
console.log(dataBr);

// pegar hora modo brasileiro
let horaBr = data.toLocaleString('pt-br', {timeStyle: 'short'});
console.log(horaBr);

// comparar datas
var hoje = new Date();
var vencimento = new Date(2022,0,8);

if(hoje > vencimento) {
    console.log("Sua conta está vencida");
}
else {
    console.log("Ainda não venceu");
}

// diferença de datas
var dataInicial = new Date();
var dataFinal = new Date(2021,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime(); // diferença milissegundo

var diferencaDias = Math.ceil(diferencaTempo/(24*60*60*1000));

console.log(diferencaDias+ " dias");