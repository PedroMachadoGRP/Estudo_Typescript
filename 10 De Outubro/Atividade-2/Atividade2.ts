import * as leitor from "readline-sync"
export class Aluno {
    nomes : string
    notas : Array <number> = []

    constructor (nomes : string) {
        this.nomes = nomes
        this.notas = []
        
        

    }
    setNotas(n0:number,n1:number,n2:number){
        this.notas.push(n0)
        this.notas.push(n1)
        this.notas.push(n2)
    }

    getMedia (): number {
        let media = (this.notas[0] + this.notas[1] + this.notas[2])/3
        return media

    }

    


}