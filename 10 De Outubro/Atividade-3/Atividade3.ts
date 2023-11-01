import * as leitor from "readline-sync"

export class calculadora {
    n1 : number
    n2 : number
    
    setValore(){
        this.n1 = leitor.questionFloat("Insira o n1 : ")
        this.n2 = leitor.questionFloat("Insira o n2 : ")

    }
    getMais() : number {return this.n1 + this.n2}
    getMenos() : number {return this.n1 - this.n2}
    getVezes() : number {return this.n1 * this.n2}
    getDividir() : number {return this.n1 / this.n2}

}