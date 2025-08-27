
function validaProc() {

   let vetor =[];

   let i = 3;
   for( let i = 0; i < 3; i++){
        vetor[i] = parseInt(prompt("Informe o valor: "))
   }
   for(let x in vetor){
        console.log(`O tamanho do vetor é: ${vetor[x]}`)
   }
   return false;
}




