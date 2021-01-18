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
"use strict"; //ES5

//interaccionesBasicas();
//consola();
//tiposDatos();
//arrays();
objetos();

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

function arrays(){


    //Segunda forma de declararlo.
    const arr = Array(3); //[]

    console.log(arr);
    
    arr[0] = 6;
    arr[1] = 7;
    arr[2] = 8;

    arr[2] = 9;

    arr[8] = 10;

    arr[12] = 'adfgasfgasrfgarwsg';

    arr['dato'] = new Date();

    console.log('dato', arr['dato'], 'dato', arr.dato);

    console.log(arr, arr.length);

    for (let i = 0; i <arr.length; i++){
        console.log(arr[i]);
    }
        
    for(let dato of arr){
        console.log(dato);
    } 
    
    for(let clave in arr){
        console.log(clave, arr[clave]);
    }

    const diccionario = [];
    diccionario['casa'] = 'keli';
    diccionario['coche'] = 'buga';

    console.log(diccionario['casa']);
    console.log(diccionario.coche);
}

function objetos(){
    const persona = new Object(); //{}

    console.log(persona);

    persona.od = 5;
    persona.nombreCompleto = {};
    persona.nombreCompleto.nombre = 'Arturo';
    persona.nombreCompleto['apellidos'] = 'Montañez';


    console.log(persona);

    persona.id = 10;
    persona.nombre = 'Perico';
    persona.apellidos = 'De Los Palotes'

    persona.getNombreCompleto = devolverNombreCompleto;
    persona.getId = function(){
        return this.id;
    }

    console.log(persona.getId());
    console.log(persona.getNombreCompleto());

    var Persona = function(id, nombre, apellidos){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    Persona.prototype.getNombreCompleto = devolverNombreCompleto;

    var p1 = new Persona(1, 'Pepito', 'Perez');

    console.log(p1);
    console.log(p1.getNombreCompleto());

    var p2 = {id: 1, nombre: 'Pepito', apellidos: 'Perez'};
    console.log(p2);
    console.log(p1 == p2);
}



function devolverNombreCompleto(){
    return this.nombre+' '+this.apellidos;
}
