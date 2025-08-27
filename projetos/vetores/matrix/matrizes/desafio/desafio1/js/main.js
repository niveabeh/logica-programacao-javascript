function validaProc() {

   // O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
   // uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
   // total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
   // andar.

   let matriz =[];
   let contador = 0, acumulador = 0,  contadorNaoInf= 0;
   for(let i = 0; i < 2; i++){
      matriz[i] = []
      for(let y = 0; y< 3; y++){
         matriz[i][y] = parseFloat(prompt(`Informe a renda\nAndar - ${i+1}/ Ap ${y+1}: `));
         contador++
         acumulador = acumulador + matriz[i][y];
      }
   }
   let media = acumulador / contador;
   console.log(`Total de declarantes: ${contador}\nRenda total: ${acumulador}\nMedia: ${media.toFixed(2)}`);
   

   return false;
     
}




