function validaProc(){
    if(document.getElementById('numint').value == ""){
        alert("Por favor preencha o campo")
        document.frmtabuada.focus();
        return false;
    }
    let numero = perseInt(document.getElementById('numint').value)
    for(let i =1; i < 11;i++){
        console.log(numero + " x " + i +" = "+ numero * i)
    }
}