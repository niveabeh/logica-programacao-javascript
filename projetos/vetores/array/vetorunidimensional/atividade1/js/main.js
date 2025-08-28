
function validaProc() {
    let i = 1;
    let acumulador = 0;
    let resposta = 0;

    while(i <= 3) {
        resposta = parseInt(prompt(`Informe o número ${i} de 3:`));

        if(!isNaN(resposta)) {
            acumulador += resposta; 
            i++; 
        } else {
            alert("Por favor, informe um número inteiro válido.");
        }
    }

    alert("A soma dos números: " + acumulador);
    return false;
}





