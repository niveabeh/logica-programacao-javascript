function validaProc() {

     let numeroReais =[];
     for(let i = 0; i < 10; i++){
          numeroReais[i] = parseFloat(prompt("Informe o números: "))
     }
     for(let i = 1; i <= 10; i++){
          if(i%2==1){
               console.log(`A posição ${i}: ${numeroReais[i]}`)
          }
     }
     return false;
}




