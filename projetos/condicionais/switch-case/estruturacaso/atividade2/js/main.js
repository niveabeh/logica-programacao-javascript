function procFormulario() {
    
    if(document.getElementById('num1').value == "") {
        alert("Favor preencha o campo Número 1");
        document.getElementById('num1').focus();
        return false;
    } else if(document.getElementById('num2').value == "") {
        alert("Favor preencha o campo Número 2");
        document.getElementById('num2').focus();
        return false;
    } else {
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);

        
        switch(true) {
            case(num1 > num2):
                console.log("O primeiro número é maior que o segundo.");
                break;
            case(num1 < num2):
                console.log("O primeiro número é menor que o segundo.");
                break;
            default:
                console.log("Os dois números são iguais.");
                break;
        }
        return false; 
    }
}