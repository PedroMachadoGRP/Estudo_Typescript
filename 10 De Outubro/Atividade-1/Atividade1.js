"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(Titulo, Autor, Data) {
        this.Titulo = Titulo;
        this.Autor = Autor;
        this.Data = Data;
    }
    Livro.prototype.obterDetalhes = function () {
        return "".concat(this.Titulo, ",").concat(this.Autor, ",").concat(this.Data);
    };
    return Livro;
}());
exports.Livro = Livro;
