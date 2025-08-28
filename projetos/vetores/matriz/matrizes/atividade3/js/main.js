function validaProc() {

   let matriz=[];

   for(let i = 0; i < 2; i++){
      matriz[i] = [];
      for(let y =0; y < 2; y++){
         matriz[i][y] = i + y
      }
   }
   for(let i = 0; i < 2; i++){
      for(let y =0; y < 2; y++){
   
         document.write(matriz[i][y])
      }
      document.write("<br>");
   }
      return false;
     
}




