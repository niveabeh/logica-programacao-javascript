
function validaProc() {
     
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




