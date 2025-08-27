
function validaProc() {

    // A academia de ginástica “SÓENGORDA LTDA.” necessita de uma solução que 
    // calcule e informe o IMC (Indice de Massa Corpórea) de uma pessoa, considerando: 
    // IMC = Peso / Altura * Altura. Permita que este programa seja executado quantas vezes 
    // o usuário desejar.
    
    do{
        peso=parseFloat(prompt("Informe o seu peso: "));
        altura=parseFloat(prompt("Informe a sua altura: "));
        imc = (peso / (altura * altura)).toFixed(2);
        alert(`O peso ${peso}\nAltura ${altura}\nIMC: ${imc}`);
        opcao = parseInt(prompt("Deseja calcular novamente: "));
    }while(opcao != 2)

    
    return false;
}