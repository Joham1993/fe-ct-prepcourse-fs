console.log("METODOS DE ARREGLOS");

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];

console.log("// PUSH y UNSHIFT");
console.log(colores);
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log("// POP y SHIFT");
console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log("// INCLUDES");
console.log(existeDali);

// EVERY
const cumpleCriterio = (valor) => valor < 40;
const arreglo1 = [1, 30, 39, 29, 10, 13];

console.log("// EVERY");
console.log(arreglo1.every(cumpleCriterio));

// SPLIT
var palabra = 'joham edilson marin';
var palabraSeparada = palabra.split('');

console.log("// SPLIT");
console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log("// JOIN");
console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
console.log("// FOREACH");
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log("// MAP");
console.log(masUno);
