function Tabuada() {
      let campo = document.getElementById('numint');
      let resultado = document.getElementById('resultado');

      if (campo.value == "") {
        alert("Favor preencha o campo.");
        campo.focus();
        return false;
      }

      let numero = parseInt(campo.value);
      resultado.innerHTML = "<h2>Tabuada do " + numero + "</h2>";

      for (let tab = 1; tab <= 10; tab++) {
        resultado.innerHTML += numero + " × " + tab + " = " + (numero * tab) + "<br>";
      }

      return false;
}