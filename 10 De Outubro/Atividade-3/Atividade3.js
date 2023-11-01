"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculadora = void 0;
var leitor = require("readline-sync");
var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.setValore = function () {
        this.n1 = leitor.questionFloat("Insira o n1 : ");
        this.n2 = leitor.questionFloat("Insira o n2 : ");
    };
    calculadora.prototype.getMais = function () { return this.n1 + this.n2; };
    calculadora.prototype.getMenos = function () { return this.n1 - this.n2; };
    calculadora.prototype.getVezes = function () { return this.n1 * this.n2; };
    calculadora.prototype.getDividir = function () { return this.n1 / this.n2; };
    return calculadora;
}());
exports.calculadora = calculadora;
