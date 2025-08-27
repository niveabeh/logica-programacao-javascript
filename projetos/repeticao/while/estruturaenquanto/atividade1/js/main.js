
function validaProc(){
    // Faça um algoritmo que leia 3 números e imprima seu somatório...
    let i = 1;
    let acumulador = 0;
    while( i <= 3){
        resposta = parseInt(prompt("Informe o número: "));
        i++
        acumulador= resposta + acumulador;
    };
    alert("A soma dos números: "+acumulador);
    return false;
}