function validaProc(){
    let i = 1;
    let num = 0;
    while( i <= 3){
        i++;
        numeros = parseInt(prompt("Informe o número"));
        if(numeros > num){
           num = numeros; 

        }
    }
    alert("O maior número é: "+ num);
    return false;

}