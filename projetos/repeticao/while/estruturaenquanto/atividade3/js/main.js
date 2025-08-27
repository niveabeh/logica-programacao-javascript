
function validaProc(){
    
    // Ler 3 números inteiros positivos exibir a soma dos números que são divisíveis por 5
    let i = 1; 
    let contator = 0;
    let acumulador = 0;
    let numeros = 0;
    while(i <=3){
        numeros = parseInt(prompt("Informe o número: "))
        if(numeros >= 5 && numeros % 5 == 0){
            acumulador += numeros
            contator++ 
        }
        i++;
    };
    alert(`Total de números: ${contator}\nTotal acumulado: ${acumulador}`);
    return false;
}