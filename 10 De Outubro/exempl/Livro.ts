export class Livro{
    titulo: String;
    autor: String;
    anoPublicacao: Number;

    constructor( titulo: String, autor: String, anoPublicacao: Number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    obterDetalhes(){
        return `${this.titulo}, ${this.autor}, ${this.anoPublicacao}`
    }
}