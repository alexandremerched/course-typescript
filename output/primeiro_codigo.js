"use strict";
console.log("Hello World! Este é meu primeiro código Typescript");
console.log("===============================");
var nome = "João";
console.log("Olá " + nome + ". Seja bem-vindo!");
console.log("===============================");
var Produto = (function () {
    function Produto(produtoNome, produtoValor) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
    return Produto;
}());
var playstation5 = new Produto("Playstation 5", 5000);
console.log("===============================");
var elemento = document.querySelector("div");
//# sourceMappingURL=primeiro_codigo.js.map