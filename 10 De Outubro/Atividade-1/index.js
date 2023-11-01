"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Você gostaria de modificar o cadastro? (s/n)");
    if (decisao === "s") {
        editarCadastro(humano);
    }
    else {
        console.log("Obrigado,saindo...");
    }
}
function cadastro() {
    var nome = leitor.question("Insira seu nome aqui: ");
    var cpf = leitor.question("Insira seu CPF aqui: ");
    var RG = leitor.question("Insira seu RG aqui: ");
    var cor = leitor.question("Insira sua cor aqui: ");
    var idade = leitor.question("Insira sua Idade aqui: ");
    var humano = new Pessoa_1.Pessoa(nome, cpf, RG, cor, idade);
    return humano;
}
function metodos() {
    var humano = cadastro();
    humano.getNome();
    humano.getCPF();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
    return humano;
}
function editarCadastro(humano) {
    humano.setNome();
    humano.setCPF();
    humano.setRG();
    humano.setCor();
    humano.setIdade();
    humano.getNome();
    humano.getCPF();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
}
main();
