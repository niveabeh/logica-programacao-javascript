function validaProc() {
     
      let matriz = [];
      let linha = 3;
      let coluna = 3;
      // Alimentar a matriz
      for(let i = 0; i < linha;i++){
         matriz[i]=[]
         for(let y = 0; y <coluna; y++){
            matriz[i][y] = parseInt(prompt("Digite o valor da linha "+ i+"e coluna "+y));
         }
         
      }
      for(let i = 0; i < linha;i++){
        
         for(let y = 0; y <coluna; y++){
            document.write(matriz[i][y]+"&nbsp&nbsp");
         }
         document.write("<br>");
      }
      return false;
     
}




