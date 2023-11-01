import * as leitor from "readline-sync"

import { calculadora } from "./Atividade3"

function main (){
    let calc = new calculadora()
    calc.setValore()
    let menu : boolean true 
    while(menu){
        let opt = leitor.questionInt("Escolha a operacao: \n1 - soma\n2 - vezes\n3 - menos\n4 - divisao\n5 - modificar valores\n0 - sair\n:")
        switch(opt){
            case 1 :
                console.log("A soma :",calc.getMais());
                break
            case 2 :
                console.log("A multiplicacao: ", calc.getVezes());
                break
            case 3:
                console.log("A Divisão : ", calc.getDividir());
                break

            case 0 :
                calc.setValore()
                break
    
            case 4:
                console.log("A subtracao :", calc.getMenos());
                break
            } 

        }
    } 
}
main()