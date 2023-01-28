//OBJETOS Y SUS VALORES
var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
console.log(deportes);

 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
 console.log(persona);

 // ACCEDER A UNA PROPIEDAD
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR VALOR A UNA PROPIEDAD
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR PROPIEDAD A UN OBJETO
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR PROPIEDAD A UN OBJETO
delete autos.marcas;
console.log(autos);

//SINTAXYS PARA PROPIEDADES DE OBJETOS
// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//FOR IN
var mundo = { continentes: 7, paises: 198, oceanos: 5 };

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }


//THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    //Funcion dentro de un objeto
    info: function() {
       console.log('Mi perro es un  ' + this.raza );
    },
 };
mascota.info();

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log("//KEYS");
console.log(todasLasPropiedades);
