"use strict"; //ES5

window.onload = function () {
  const h1s = document.getElementsByTagName("h1");
  console.log(h1s.lenght);
  console.log(h1s);

  for (let h1 of h1s) {
    console.log(h1);
    h1.innerText = "Mira mama, estoy en un bucle";
    h1.style = "color: cyan";
  }

  const bSaludar = document.getElementById("btn-saludar");

  bSaludar.onclick = function () {
    const iNombre = document.getElementById("nombre");
    console.log(iNombre);

    alert("Hola " + iNombre.value);

    return false; //Cancelar la propagación del evento al navegador
  };

  const form = document.getElementById("formulario");

  form.onsubmit = function (e) {
    //onsole.log('Formulario');
    //alert('Formulario');
    e.preventDefault(); //Equivalente al return false de arriba

    const nombreCompleto = document.getElementById("nombre-completo");
    const dni = document.getElementById("dni");

    console.log(nombreCompleto, dni);

    if (nombreCompleto.value === "Arturo Montañez") {
      if (!nombreCompleto.classList.contains("error")) {
        //alert('Nombre reservado');
        //nombreCompleto.style ='border: 1px solid red';
        nombreCompleto.classList.add("error");
        console.log("Nombre reservado");

        const errorNombre = document.createElement("span"); //<span />

        errorNombre.innerText = "Ese nombre está reservado"; //<span>Ese nombre está reservado</span>
        errorNombre.className = "error"; //<span class='error'>Ese nombre está reservado</span>

        nombreCompleto.insertAdjacentElement("afterend", errorNombre);
      }
    } else {
      //nombreCompleto.style = 'border: 1px solid black';
      if (nombreCompleto.classList.contains("error")) {
        nombreCompleto.nextElementSibling.remove();
        nombreCompleto.classList.remove("error");
      }
    }

    if (!validarDNI(dni.value)) {
      if (!dni.classList.contains("error")) {
        //dni.style = 'border: 1px solid red';
        dni.classList.add("error");
        console.log("El DNI es incorrecto");

        const errorSpan = document.createElement("span");

        errorSpan.innerText = "El DNI es incorrecto"; // <span>Ese nombre está reservado</span>
        errorSpan.className = "error"; // <span class="error">Ese nombre está reservado</span>

        dni.insertAdjacentElement("afterend", errorSpan);
      }
    } else {
      if (dni.classList.contains("error")) {
        //dni.style = 'border: 1px solid black';
        dni.classList.remove("error");
        dni.nextElementSibling.remove();
      }
    }
  };
};

function validarDNI(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  //En Javascript las expresiones regulares son un tipo de dato
  if (!/[XYZ\d]\d{7}[A-Z]/.test(dni)) {
    //alert('DNI con formato no valido');
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

/*
Versiones ECMAScript
ES1
ES2
ES3
ES4
ES5
ES2015/ES6 *IE11 soporte parcial
ES2016 *
ES2017 * IE11 no tiene esta característica
ES2018
ES2019
ES2020
ES2021
*/

//interaccionesBasicas();
//consola();
//tiposDatos();
//arrays();
//objetos();
//navegador()
//dom();

function interaccionesBasicas() {
  alert("Hola mundo fichero separado");

  //Declaracion de variable ES5 o anterios
  var nombre = prompt("¿Como te llamas");

  alert("Hola " + nombre);

  var confirmacion = confirm("¿Estas seguro?");

  alert(confirmacion);
}

function consola() {
  console.debug("debug");
  console.log("log");
  console.warn("warn");
  console.error("error");
}
function tiposDatos() {
  //Declaración de variable ES2015 o superior
  let x = 5;

  console.log(x, typeof x);

  x = 5.8;

  console.log(x, typeof x);

  const texto = "Hola holita";

  console.log(texto, typeof texto);

  x = new Date();

  console.log(x, typeof xc);

  let y;

  console.log(y, y == undefined, typeof undefined);

  console.log(null, typeof null);

  let numeroRecibido, numero; //numeroRecibido = 'adadfgaad';

  do {
    numeroRecibido = prompt("Dime un número");

    console.log(numeroRecibido, typeof numeroRecibido);

    console.log(typeof numeroRecibido, typeof 5);

    //Si paso un texto que no es numero, parseint sacara NaN-> not a number.
    //Ojo, si empieza por números leera todo hasta que encuentre una letra
    numero = parseInt(numeroRecibido);

    console.log(
      numeroRecibido,
      numero,
      typeof numeroRecibido,
      numero,
      typeof numero
    );
  } while (isNaN(numero)); //} while (numero == NaN);

  //Hay dos operadores de igual diferentes. Puede ser == o ==

  //if(numero == 5){
  if (numero === 5) {
    console.log("Por el culo te la hinco");
  } else {
    console.log("Tu te lo pierdes");
  }
}

function arrays() {
  //Segunda forma de declararlo.
  const arr = Array(3); //[]

  console.log(arr);

  arr[0] = 6;
  arr[1] = 7;
  arr[2] = 8;

  arr[2] = 9;

  arr[8] = 10;

  arr[12] = "adfgasfgasrfgarwsg";

  arr["dato"] = new Date();

  console.log("dato", arr["dato"], "dato", arr.dato);

  console.log(arr, arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let dato of arr) {
    console.log(dato);
  }

  for (let clave in arr) {
    console.log(clave, arr[clave]);
  }

  const diccionario = [];
  diccionario["casa"] = "keli";
  diccionario["coche"] = "buga";

  console.log(diccionario["casa"]);
  console.log(diccionario.coche);
}

function objetos() {
  const persona = new Object(); //{}

  console.log(persona);

  persona.od = 5;
  persona.nombreCompleto = {};
  persona.nombreCompleto.nombre = "Arturo";
  persona.nombreCompleto["apellidos"] = "Montañez";

  console.log(persona);

  persona.id = 10;
  persona.nombre = "Perico";
  persona.apellidos = "De Los Palotes";

  persona.getNombreCompleto = devolverNombreCompleto;
  persona.getId = function () {
    return this.id;
  };

  console.log(persona.getId());
  console.log(persona.getNombreCompleto());

  var Persona = function (id, nombre, apellidos) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
  };

  Persona.prototype.getNombreCompleto = devolverNombreCompleto;

  var p1 = new Persona(1, "Pepito", "Perez");

  console.log(p1);
  console.log(p1.getNombreCompleto());

  var p2 = { id: 1, nombre: "Pepito", apellidos: "Perez" };
  console.log(p2);
  console.log(p1 == p2);
}

function devolverNombreCompleto() {
  return this.nombre + " " + this.apellidos;
}
/*
var devolverNombreCompleto = function(){
  return this.nombre + ' ' + this.apellidos;
}
*/

/*function navegador(){
  document.write(<h1>'Hola holita</h1>);
}*/
