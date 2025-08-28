function validaProc() {

   let matriz =[];

   for(let i = 0; i < 2; i++){
      matriz[i] = [];
      for(let y =0; y < 3; y++){
         matriz[i][y] = parseInt(prompt(`Informe o número na matriz ${i}-${y}: `))
      }
   }
   for(let i = 0; i < 2; i++){
      for(let y =0; y < 3; y++){
         console.log(matriz[i][y]);
      }
      console.log("-")
   }

   return false;
     
}




