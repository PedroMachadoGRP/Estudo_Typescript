import * as leitor from "readline-sync"
import { Livro } from "./Atividade1"

function main()  {
   let livro = cadastro()
   console.log(livro.obterDetalhes);
   

}

function cadastro()  {
    let Titulo = leitor.question("Qual o titulo do livro?")
    let Autor = leitor.question("Quem é o autor do livro")
    let data = leitor.questionInt("Qual a data de lançamento do livro")
    let livro = new Livro(Titulo,Autor,data)
    return livro
}
main()
