function procFormulario(){
    if(document.frmnotas.txtnum1.value==""){
        alert("Preencha o campo Num 1");
        document.frmnotas.txtnum1.focus();
        return false;
    }else if(document.frmnotas.txtnum2.value==""){
        alert("Preencha o campo Num 2");
        document.frmnotas.txtnum2.focus();
        return false;
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        if(num1 == num2){
            alert("Primeiro número: "+num1.toFixed(2)+"| Segundo número: "+num2.toFixed(2)+" Os números são iguais")
        }else if( num1 > num2){
            alert(num1.toFixed(2)+" É maior que o segundo número")
        }else{
            alert(num2.toFixed(2)+" É maior que o primeiro número")
        }
    }
}