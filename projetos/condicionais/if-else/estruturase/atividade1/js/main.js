function procFormulario(){
    //validação de campos

    if(document.frmnotas.txtnum1.value==""){
        alert("Preencha o campo Num 1");
        document.frmnotas.txtnum1.focus();
        return false;
    }else if(document.frmnotas.txtnum2.value==""){
        alert("Preencha o campo Num 2");
        document.frmnotas.txtnum2.focus();
        return false;
    }else if(document.frmnotas.txtnum3.value==""){
        alert("Preencha o campo Num 3");
        document.frmnotas.txtnum3.focus();
        return false;
    }else{
        //Processamento do programa...
        //parseFloat() função para transformar o caracter em float
        let nota1 = parseFloat(document.getElementById('num1').value);
        let nota2 = parseFloat(document.getElementById('num2').value);
        let nota3 = parseFloat(document.getElementById('num3').value);
        let media = (nota1+ nota2 + nota3)/ 3
        if(media>=7){
            alert("Sua média foi "+media.toFixed(2)+"! Você foi aprovado")
        }else if( media < 6.9 && media >= 5){
            alert("Sua média foi "+ media.toFixed(2)+"! Você está de recuperação")
        }else if( media < 5 ){
            alert("Sua média foi "+media.toFixed(2)+"! Você foi reprovado")
        }
        
    }
}