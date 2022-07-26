"use strict";
console.log("Hello World! Este é meu primeiro código Typescript");
console.log("===============================");
const nome = "João";
console.log("Olá " + nome + ". Seja bem-vindo!");
console.log("===============================");
class Produto {
    nome;
    valor;
    constructor(produtoNome, produtoValor) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}
const playstation5 = new Produto("Playstation 5", 5000);
console.log("===============================");
const elemento = document.querySelector("div");
//# sourceMappingURL=primeiro_codigo.js.map