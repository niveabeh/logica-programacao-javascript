function validaProc() {
   // Faça um programa que peça ao usuário os valores de uma matriz 4x4 e mostre os
   // valores das diagonais dessa matriz.

   let matriz =[];
   let diagonal = 0;
   // 1 2 3 
   // 4 5 6 
   // 7 8 9 
   // 00 01 02 
   // 10 11 12
   // 20 21 22
   for(let i = 0; i < 3; i++){
      matriz[i] = [];
      for(let y =0; y < 3; y++){
         matriz[i][y] = parseInt(prompt(`Informe o número na matriz ${i}-${y}: `))
      }
   }
   console.log(matriz)
   for(let i = 0; i < 3; i++){
      for(let y =0; y < 3; y++){
         if(i == y){
            diagonal = matriz[i][y];
            console.log(diagonal);
         }
         
      }
      diagonal = 0;
      console.log("-")
   }
   let soma = 0; 
   console.log("============")
   for(let i = 0; i < 3; i++){
      for(let y =0; y < 3; y++){
         soma = i + y;
         if(soma == 2){
            diagonal = matriz[i][y];
            console.log(diagonal);
         }
         
      }
      diagonal = 0;
      console.log("-")
   }

   return false;
     
}




