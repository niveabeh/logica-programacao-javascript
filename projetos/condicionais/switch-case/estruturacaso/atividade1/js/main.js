function procFormulario(){
   
    if(document.frmnumint.txtnumint.value==""){
        alert("Preencha o campo idade");
        document.frmnumint.txtnumint.focus();
        return false;
    }else{
        let numint = parseInt(document.getElementById('numint').value);
        switch (true) {

            case(numint >= 0 && numint <= 3):
                console.log("Bebê");
                return false; 
                break;
            case(numint >= 4 && numint <= 10):
                console.log("Criança");
                return false; 
                break;
            case(numint >= 11 && numint <= 18):
                console.log("Adolescente");
                return false; 
                break;
            default: 
                console.log("Adulto");
                return false;
                break;  

        }
    }

}