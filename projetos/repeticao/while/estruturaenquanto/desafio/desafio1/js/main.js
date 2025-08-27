
function validaProc() {

    //     Faça um programa que peça ao usuário dois números. Após, enquanto ele não digitar 
    // o resultado correto da soma desses dois números, mostre na tela “tente novamente”, 
    // quando acertar “resultado correto!”
    let n1 = parseInt(prompt("Informe o primeiro número: "))
    let n2 = parseInt(prompt("Informe o segundo número: "))

    let soma = n1 + n2;
    let resultado = 0;
    do{
        resultado = parseInt(prompt("Informe o resultado: "))
    }while(resultado != soma)

    alert(`Primeiro número: ${n1}\nSegundo múmero: ${n2}\nResultado: ${soma}`);
    return false;
}