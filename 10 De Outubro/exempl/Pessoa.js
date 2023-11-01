"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, RG, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.RG = RG;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("Ola,meu nome é:", this.nome);
    };
    Pessoa.prototype.getCPF = function () {
        console.log("Ola,meu CPF é :", this.cpf);
    };
    Pessoa.prototype.getRG = function () {
        console.log("Ola,meu RG é :", this.RG);
    };
    Pessoa.prototype.getCor = function () {
        console.log("Ola,minha cor é :", this.cor);
    };
    Pessoa.prototype.getIdade = function () {
        console.log("Ola,minha idade é : ", this.idade);
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome: ");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCPF = function () {
        var CPF2 = leitor.question("Insira o novo CPF: ");
        this.cpf = CPF2;
    };
    Pessoa.prototype.setRG = function () {
        var rgDois = leitor.question("Insira o novo RG: ");
        this.RG = rgDois;
    };
    Pessoa.prototype.setCor = function () {
        var Cor2 = leitor.question("Insira sua nova cor aqui: ");
        this.cor = Cor2;
    };
    Pessoa.prototype.setIdade = function () {
        var IdadeDois = leitor.question("Insira sua nova idade: ");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
