import { Aluno } from "./Atividade2";
import * as leitor from "readline-sync"

function main()  {
    let aluno = cadastro()
    console.log(aluno.getMedia());
    

}

function cadastro(): Aluno {

    let nome = leitor.question("Insira o nome do aluno: ")
    let aluno = new Aluno(nome)
    console.log("Aluno criado com sucesso");
    
    let n1 = leitor.questionFloat("Insira a sua nota de matematica: ")
    let n2 = leitor.questionFloat("Insira a sua nota de português: ")
    let n3 = leitor.questionFloat("Insira sua nota de artes: ")
    aluno.setNotas(n1,n2,n3)
   return aluno

}
main()