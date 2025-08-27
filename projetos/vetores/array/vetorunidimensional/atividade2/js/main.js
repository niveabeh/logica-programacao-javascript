
function validaProc() {

     //   Faça um programa para ler as notas obtidas pelos alunos, e depois exibir
     // um relátorio das notas iguais ou superiores a 7.5 e tambem
     // no final a quantidade de notas igual o superior a 7,5
     
     let vetor = [];
     let contador = 0;
     for (let i = 0; i < 3; i++) {
          vetor[i] = parseFloat(prompt("Informe as notas: "))
     }
     for (let i = 0; i < vetor.length; i++) {
          if (vetor[i] >= 7.5) {
               contador++
          }
     }
     alert(`${contador} pessoas tiraram as notas maior ou igual a 7`)
     return false;

}




