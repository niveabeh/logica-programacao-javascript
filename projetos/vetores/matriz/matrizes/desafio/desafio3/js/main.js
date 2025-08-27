function validaProc() {

   // A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
   // 5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
   // elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original 
   // e a nova.

   

   let matriz =[];
   let acumulador = [];
   for(let i = 0; i < 2; i++){
      matriz[i] = [];
      acumulador[i] = [];
      for(let y = 0; y< 2; y++){
         matriz[i][y] = parseFloat(prompt(`Informe o número: `));
         acumulador[i][y] = (matriz[i][y] * matriz[i][y]);
         
      }
   }
   for(let i = 0; i < 2; i++){
      for(let y = 0; y< 2; y++){  
         document.write(`${acumulador[i][y]} &nbsp&nbsp`);
      }
      document.write("<br>");
   }
  
   
   

   return false;
     
}




