function validaProc() {
    let turma = 1, totalAlunosTurma1 = 0, totalAlunosTurma2 = 0, totalAlunosTurma3 = 0, somaNotasTurma1 = 0, somaNotasTurma2 = 0, somaNotasTurma3 = 0;

    do {
        let qtdAlunos = parseInt(prompt("Turma " + turma + " - Informe a quantidade de alunos:"));
        let acumuladorNotas = 0;
        let contador = 1;

        do {
            let nota = parseFloat(prompt("Turma " + turma + " - Aluno " + contador + " - Informe a nota:"));
            acumuladorNotas += nota;
             contador++;
        } while (contador <= qtdAlunos);

        if (turma == 1) {
            totalAlunosTurma1 = qtdAlunos;
            somaNotasTurma1 = acumuladorNotas;
        } else if (turma == 2) {
            totalAlunosTurma2 = qtdAlunos;
            somaNotasTurma2 = acumuladorNotas;
        } else if (turma == 3) {
            totalAlunosTurma3 = qtdAlunos;
            somaNotasTurma3 = acumuladorNotas;
        }

        turma++;
    } while (turma <= 3);

    let mediaTurma1 = somaNotasTurma1 / totalAlunosTurma1;
    let mediaTurma2 = somaNotasTurma2 / totalAlunosTurma2;
    let mediaTurma3 = somaNotasTurma3 / totalAlunosTurma3;


    let totalAlunosMediaSete = 0;
    if (mediaTurma1 >= 7) totalAlunosMediaSete += totalAlunosTurma1;
    if (mediaTurma2 >= 7) totalAlunosMediaSete += totalAlunosTurma2;
    if (mediaTurma3 >= 7) totalAlunosMediaSete += totalAlunosTurma3;


    let totalAlunosGeral = totalAlunosTurma1 + totalAlunosTurma2 + totalAlunosTurma3;
    let somaNotasGeral = somaNotasTurma1 + somaNotasTurma2 + somaNotasTurma3;
    let mediaGeral = somaNotasGeral / totalAlunosGeral;

    alert(
        "Médias das turmas:\n" +
        "Turma 1: " + mediaTurma1.toFixed(2) + " (Alunos: " + totalAlunosTurma1 + ")\n" +
        "Turma 2: " + mediaTurma2.toFixed(2) + " (Alunos: " + totalAlunosTurma2 + ")\n" +
        "Turma 3: " + mediaTurma3.toFixed(2) + " (Alunos: " + totalAlunosTurma3 + ")\n\n" +
        "Total de alunos em turmas com média 7: " + totalAlunosMediaSete + "\n" +
        "Média geral da escola: " + mediaGeral.toFixed(2)
    );

    return false;
}




