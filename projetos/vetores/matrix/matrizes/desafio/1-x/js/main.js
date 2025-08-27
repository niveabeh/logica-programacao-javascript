function validaProc() {

   let matriz = [];
   let contador = 0, acumulador = 0;
   
   for (let i = 0; i < 2; i++) {
      matriz[i] = [];
      for (let y = 0; y < 3; y++) {
         let entrada;
         
         do {
            entrada = prompt(`Informe a renda\nAndar - ${i+1}/ Ap ${y+1}: `);

            // Verifica se foi cancelado
            if (entrada === null) {
               alert("Entrada cancelada. Informe um valor.");
            }
            // Verifica se está vazio ou não é número
            else if (entrada.trim() === "" || isNaN(entrada)) {
               alert("Por favor, digite um valor numérico válido!");
               entrada = null; // força repetir o laço
            }

         } while (entrada === null);

         matriz[i][y] = parseFloat(entrada);
         contador++;
         acumulador += matriz[i][y];
      }
   }

   let media = acumulador / contador;
   console.log(`Total de declarantes: ${contador}\nRenda total: ${acumulador}\nMédia: ${media}`);
   return false;
}




