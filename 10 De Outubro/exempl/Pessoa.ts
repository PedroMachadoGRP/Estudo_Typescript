import * as leitor from "readline-sync"

export class Pessoa{
    nome : string
    cpf : number
    RG : number
    cor :string
    idade : number

    constructor(nome : string,cpf : number,RG : number,cor :string,idade : number){
        this.nome = nome
        this.cpf = cpf
        this.RG= RG
        this.cor = cor
        this.idade = idade
    }

    getNome(){
        console.log("Ola,meu nome é:", this.nome);
        
    }
    getCPF (){
        console.log("Ola,meu CPF é :", this.cpf);
    }
    getRG (){
        console.log("Ola,meu RG é :", this.RG);
    }
    getCor() {
        console.log("Ola,minha cor é :", this.cor);
    }
    getIdade(){
        console.log("Ola,minha idade é : ", this.idade);
        
    }
    setNome(){
        let nomeDois = leitor.question("Insira o novo nome: ")
        this.nome = nomeDois
    }
    setCPF (){
        let CPF2 = leitor.questionInt("Insira o novo CPF: ")
        this.cpf = CPF2
    }
    setRG(){
        let rgDois = leitor.questionInt("Insira o novo RG: ")
        this.RG = rgDois
    }
    setCor (){
        let Cor2 = leitor.question("Insira sua nova cor aqui: ")
        this.cor = Cor2
    }
    setIdade (){
        let IdadeDois = leitor.questionInt("Insira sua nova idade: ")
        this.idade = IdadeDois
    }


    }