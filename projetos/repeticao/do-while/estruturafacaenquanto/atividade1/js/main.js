function validaProc(){
    let somatoria = 0;
    do{
        numero =parseInt(prompt("Digite o número: "))
        console.log("O número informado é: "+numero);
        somatoria += numero;
        resposta = parseInt(prompt("Para sair digite o número 0 ou outro para continuar: "));
    }while(resposta != 0)
    console.log("A somatória dos números é: "+somatoria);
    return false;
}