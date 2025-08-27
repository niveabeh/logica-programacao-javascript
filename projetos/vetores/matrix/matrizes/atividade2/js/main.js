function validaProc() {
   // Construa um algoritmo para ler uma matriz(2x2)
   //  de inteiros e imprimir a soma dos elementos
   //   de uma linha fornecida pelo usuário
   
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
      let numero = parseInt(prompt("Informe a linha que deseja imprimir: "))
      let guardar = 0;
      for(let i = 0; i < linha;i++){  
         if(i == numero){
            for(let y = 0; y <coluna; y++){
               guardar = matriz[i][y] +  guardar 
              
            }
         } 
      }
      document.write(guardar+"&nbsp&nbsp");
      return false;
     
}




