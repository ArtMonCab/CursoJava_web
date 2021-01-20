window.onload = function() {
    document.getElementByTagName('form')[0].onsubmit = function (){
        const dni = document.getElementById('dni');

        if(validarDNI(dni.val())){
            dni.setCustomValidity('');
        }else{
            dni.setCustomValidity('Error en el DNI');
        }
    }
}

/*$(function(){//Carga del documento
    $('form').on('submit', function (){
        const dni = $('#dni').val();

        if(validarDNI(dni.val())){
            dni[0].setCustomValidity('');
        }else{
            dni[0].setCustomValidity('Error en el DNI');
        }
    }
});
*/
function validarDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    //En Javascript las expresiones regulares son un tipo de dato
    if (!/[XYZ\d]\d{7}[A-Z]/.test(dni)) {
      //alert("DNI con formato no valido");
      return false;
    }
  
    //Por si es DNI extranjero
    switch (dni.charAt(0)) {
      case "X":
        dni.replace("X", "0");
        break;
      case "Y":
        dni.replace("Y", "0");
        break;
      case "Z":
        dni.replace("Z", "0");
        break;
    }
  
    const numero = dni.substtring(0, 8);
  
    const letra = letras[numero % 23];
  
    if (dni[8] === letra) {
      //alert('La letra del DNI no es correcta');
      return false;
    }
  
    //alert('Todo correcto');
  
    return true;
  }

