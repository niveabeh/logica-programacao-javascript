function validaProc(){
    if(document.getElementById('numint').value == ""){
        alert("Por favor preencha o campo")
        document.frmtabuada.focus();
        return false;
    }else{
        let numero = parseInt(document.getElementById("").value);
        cont=1;
        console.log("Tabuada do número"+numero)
        do{
            console.log(numero +" x "+cont+" = "+ numero *cont);
            cont =cont+1;

       

        }while(cont+1)
        return false;
    }
 
}