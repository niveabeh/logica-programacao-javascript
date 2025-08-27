function validaProc() {
   // Faça um programa que peça os nomes dos 3 clientes e os valores das compras
   // feitas por eles nos 03 últimos meses e calcule:
   // • A quantidade de compras;
   // • A média das compras, considerando essa quantidade.
   // Após os cálculos serem efetuados, você deve exibir o menu a seguir ao usuário:
   // • Ver compras de um cliente (permitir que o dono do supermercado consulte os
   // valores das compras dos 3 meses, da média das compras e quantidade de compras
   // de um cliente qualquer, consultando pelo seu nome);
   // • Ver todas as compras de todos os clientes (mostrar a tabela inteira com todos os
   // valores).
   // Obs.: Quando o cliente não tiver comprado naquele mês, deve ser informado
   // 0 no valor da compra (equivale ao “R$ - “ da tabela). Guarde os nomes dos
   // clientes em um vetor. Os valores da tabela são exemplos, o programa poderá
   // receber quaisquer nomes de clientes e valores de compras.

   let clientes = [], valCompra = [], mediaCliente = [], totalCliente = [];
   let contadorNull = 0, contadorNormal = 0, acumCompra = 0, opcao, opcao2;
   

   for (let i = 0; i < 3; i++) {

      valCompra[i] = [];
      clientes[i] = prompt(`Informe o nome do cliente: `);

      for (let y = 0; y < 3; y++) {

         valCompra[i][y] = parseFloat(prompt(`Informe o valor da compra do ${y + 1}º mês: `));

         if (valCompra[i][y] == 0) {

            contadorNull++

         } else {

            acumCompra += valCompra[i][y];
            contadorNormal++

         }
      }

      totalCliente[i] = acumCompra;
      mediaCliente[i] = acumCompra / contadorNormal;
      contadorNull = 0;
      contadorNormal = 0;
      acumCompra = 0;
   }
   do {

      opcao = parseInt(prompt(`Menu\n1- Pesquisar por cliente\n2- Todos os Clientes\n3- Fim do Programa`));

      switch (opcao) {

         case 1:

            opcao2 = prompt(`${clientes.join(" - ")} Informe o nome do cliente que deseja:` )

            for (let i = 0; i < 3; i++) {
               console.log("Entrei no i")
               if (opcao2 == clientes[i]) {

                  console.log(`${clientes[i]}\n`);

                  for (let y = 0; y < 3; y++) {

                     console.log(`${(y+1)}º compra: R$${valCompra[i][y].toFixed(2)} `);

                  }

                  console.log(`Total compra do mes: R$${totalCliente[i].toFixed(2)} `);
                  console.log(`Média de compras: R$${mediaCliente[i].toFixed(2)} `);
               }
            }
            break;
         case 2:

            for (let i = 0; i < 3; i++) {

               console.log(`Cliente: ${clientes[i]}`)

               for (let y = 0; y < 3; y++) {

                  console.log(`${(y+1)}º compra:  R$${valCompra[i][y].toFixed(2)}`)

               }

               console.log(`Total compra do mes:R$${totalCliente[i].toFixed(2)}`);
               console.log(`Mèdia de compras: R$${mediaCliente[i].toFixed(2)}`);
               console.log("==============")
            }
            break;

         default:

            console.log("Opção inválida.")  

         break
      }

   }while(opcao !=3)

   return false;

}




