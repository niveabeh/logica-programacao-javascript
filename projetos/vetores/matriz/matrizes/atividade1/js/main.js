function validaProc() {
   //   Alimentar uma matriz (3x3) de valores inteiros multiplicando 
   //   essa matriz por um valor informado pelo usuário e escrevendo o conteúdo da 
   //   matriz multiplicada.
   
      let matriz = [], resp =[];
      let linha = 3;
      let coluna = 3;
      // Alimentar a matriz
      for(let i = 0; i < linha;i++){
         matriz[i]=[]
         for(let y = 0; y <coluna; y++){
            matriz[i][y] = parseInt(prompt(`Digite o valor da linha ${i} e da coluna ${y}:`));
         }
      }
      let numero = parseInt(prompt("Informe um número: "))


      for(let i = 0; i < linha;i++){  
         resp[i]=[];
         for(let y = 0; y <coluna; y++){
            resp[i][y] = matriz[i][y] * numero;
            document.write(resp[i][y]+"&nbsp&nbsp");
         }
         document.write("<br>");
      }
      return false;
     
}




