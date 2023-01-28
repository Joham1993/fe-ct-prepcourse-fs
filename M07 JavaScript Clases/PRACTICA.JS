// CREACION DE CLASES Y USO DE PROTOTIPOS

// FUNCIÓN CONSTRUCTORA 
// (USO DE "FUNCTION" PARA LA CREACION DE UNA CLASE)
function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
// ejemplo para la creacion de una funcion dentro de la clase
// fijese que se encuentra dentro de los {} de la clase, junto a las otra propiedades
    this.informacion = function (){
        console.log("Este es un carro de marca " + this.marca + " de color " + this.color);
    }
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto);
 // de esta forma invocamos a la funcion que se encuentra dentro de la clase
 miPrimerAuto.informacion();

 // EXPRESIÓN DE CLASE 
 // (USO DE LA PALABRA "CLASS" PARA CREAR UNA CLASE NUEVA)
class Auto2 {
    constructor(puertas, color, marca, año, ruedas) {
       this.puertas = puertas;
       this.color = color;
       this.marca = marca;
       this.año = año;
       this.ruedas = ruedas;
    }
// ejemplo para la creacion de una funcion dentro de la clase
// fijese que se encuentra fuera de los {} de las otra propiedades
     informacion (){
        console.log("Este es un carro de marca " + this.marca + " de color " + this.color);
    };
 }
 let miSegundoAuto = new Auto2 (4, 'Blanco', 'Fiat', 2015, 4);
 console.log(miSegundoAuto);
 miSegundoAuto.informacion();

 // USO DE PROTOTYPE EN CLASES
 // SE CREARA UNA FUNCION (PROPIEDAD EN LA CLASE ARRAY) PARA QUE MODIFIQUE
 // LOS VALORES MAYORES DE TRES EN "FALSE" 
 Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo);

// EJEMPLO CLASES Y PROTOTYPES (DESDE 0) 
// se crea la clase junto con sus propiedades
class LatinoAmerica {
    constructor (){
        this.paises = [];
    }
}
// para modificidar la clase LatinoAmerica invocamos la opcion "prototype".
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
// probamos la nueva propiedad de la clase LatinoAmerica.
// para crear una variable de nuestra clase debemos usar la palabra "new".
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);

// EXTENCION DE UNA CLASE Y HERENCIA DE PROPIEDADES
// creacion de una nueva clase ("Persona")
class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 let martin = new Persona('Martin', 26);
 martin.saludar();
 // creacion de una extencion de la clase "Persona"
 // se debe usar la palabra clave "extends"
 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
// creacion de las variables 
// (tanto clase "Persona" como de la subclase "Programador")
var joham = new Persona('Joham', 30);
var programador = new Programador('Jesus', 50, 10);
 joham.saludar();
 programador.codear();
// observese que al usar la propiedad "saludar" con la varibale "programador"
// se ejecutara la propiedad de la clase "Persona"
programador.saludar();