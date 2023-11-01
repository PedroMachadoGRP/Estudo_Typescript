import * as leitor from "readline-sync"

export class Livro {
    Titulo : string
    Autor : string
    Data : number

    constructor(Titulo : string,Autor : string,Data : number){
        this.Titulo = Titulo
        this.Autor = Autor
        this.Data= Data
    }
    obterDetalhes() {
        return `${this.Titulo},${this.Autor},${this.Data}`

    }

       
        
        
}