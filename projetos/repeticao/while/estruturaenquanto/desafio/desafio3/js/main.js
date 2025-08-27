
function validaProc() {

    // Você criará um algoritmo que peça a idade, o gênero e o salário de um grupo de
    // pessoas.Quando o usuário quiser sair e encerrar o programa, ele deve digitar 
    // “Finalizar”. Não se esqueça de validar para que o usuário digite exatamente 
    // “Finalizar”. Ao final, você deve apresentar ao usuário:

    // ● A média de salário do grupo;
    // ● A média de todas as idades;
    // ● A média de salário do gênero feminino;
    // ● A média de salário do gênero masculino.


    let opcao, idade, genero, salario;
    let acumuladorIdade = 0,  acumSalarMasc = 0,  acumSalarFem = 0;
    let contadorFem = 0, contadorMas = 0, contador = 0;

    do {

        idade = parseInt(prompt("Informe a idade: "));
        do {
            genero = parseInt(prompt("Informe o seu genero\n1- Feminino\n2- Masculino "));
        } while (genero != 1 && genero != 2)

        if (genero == 1) {
            salario = parseFloat(prompt("Informe o seu salario: "));
            acumSalarFem += salario;
            contadorFem++
        } else if (genero == 2) {
            salario = parseFloat(prompt("Informe o seu salario: "));
            acumSalarMasc += salario;
            contadorMas++
        }

        acumuladorIdade += idade;
        contador++
        opcao = prompt("Para finalizar o programa digite Finalizar");

    } while (opcao != "Finalizar");

    let mediaSalGrupo = (acumSalarFem + acumSalarMasc) / contador;
    let mediaIdade = acumuladorIdade / contador;
    let mediaFem = acumSalarFem / contadorFem;
    let mediaMas = acumSalarMasc / contadorMas;

    alert(`A média de salário do grupo: ${mediaSalGrupo}\nA média de todas as idades: ${mediaIdade}\nA média de salário do gênero feminino: ${mediaFem}\n A média de salário do gênero masculino: ${mediaMas}`);
    return false;
}