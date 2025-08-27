function validaProc() {
   // Crie uma matriz (2x2) onde o valor de cada elemento dentro 
   // da matriz é a soma dos índices da sua posição
   let matriz=[];
   // [0][1]
   // [1][2]
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




