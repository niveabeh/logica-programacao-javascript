function validaProc() {

   // O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
   // de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
   // de todos os elementos.

   

   let matriz =[];
   let acumulador;
   let total;
   let totalLinha = [];
   for(let i = 0; i < 2; i++){
      matriz[i] = [];
      acumulador = 0 ;
      for(let y = 0; y< 2; y++){
         matriz[i][y] = parseFloat(prompt(`Informe o número: `));
         acumulador += matriz[i][y];
         total += matriz[i][y];
         
      }
      totalLinha[i] = acumulador;
   }
   console.log(matriz)
   console.log(`Soma entre as linhas: ${totalLinha}\nTotal: ${acumulador}`)

   
  
   
   

   return false;
     
}




