"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atividade2_1 = require("./Atividade2");
var leitor = require("readline-sync");
function main() {
    var aluno = cadastro();
    console.log(aluno.getMedia());
}
function cadastro() {
    var nome = leitor.question("Insira o nome do aluno: ");
    var aluno = new Atividade2_1.Aluno(nome);
    console.log("Aluno criado com sucesso");
    var n1 = leitor.questionFloat("Insira a sua nota de matematica: ");
    var n2 = leitor.questionFloat("Insira a sua nota de português: ");
    var n3 = leitor.questionFloat("Insira sua nota de artes: ");
    aluno.setNotas(n1, n2, n3);
    return aluno;
}
main();
