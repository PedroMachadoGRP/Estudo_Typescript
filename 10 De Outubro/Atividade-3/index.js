"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Atividade3_1 = require("./Atividade3");
function main() {
    var calc = new Atividade3_1.calculadora();
    calc.setValore();
    console.log("A soma :", calc.getMais());
    console.log("A multiplicacao: ", calc.getVezes());
    console.log("A Divisão : ", calc.getDividir());
    console.log("A subtracao :", calc.getMenos());
}
main();
