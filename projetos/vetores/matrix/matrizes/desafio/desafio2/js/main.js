function validaProc() {

   // A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
   // números reais e mostre a soma de seus elementos.
   

   let matriz =[];
   let acumulador = 0;
   for(let i = 0; i < 2; i++){
      matriz[i] = []
      for(let y = 0; y< 3; y++){
         matriz[i][y] = parseFloat(prompt(`Informe o número: `));
         acumulador = acumulador + matriz[i][y];
      }
   }
   
   console.log(`Soma: ${acumulador.toFixed(2)}`);
   

   return false;
     
}




