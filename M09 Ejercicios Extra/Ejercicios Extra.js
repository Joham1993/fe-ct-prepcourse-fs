/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const array = [];
   for (index in objeto){
      array.push([index, objeto[index]])
   };
   return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
        var objeto = {};
        var array =[];
        array = string.split('');
        array = array.sort();
        for (let i=0; i<array.length; i++){
            if(objeto.hasOwnProperty(array[i])){
                objeto[array[i]] = objeto[array[i]] + 1;
            }else{
                objeto[array[i]] = 1;
            }
        }
        return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var desorden = [];
   var orden;
   var mayusculas = [];
   var minusculas = [];
   desorden = string.split('');
   for (let i=0; i<desorden.length; i++){
      if (desorden[i] === desorden[i].toUpperCase()){
         mayusculas.push(desorden[i]);
      }else{
         minusculas.push(desorden[i]);
      }
   }
   mayusculas = mayusculas.join('');
   minusculas = minusculas.join('');
   orden = mayusculas + minusculas;
   return orden;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var invertir;
   var paso;
   invertir = frase.split(' ');
   for (let i=0; i < invertir.length; i++){
      paso = invertir[i].split("").reverse().join("");
      invertir[i] = paso;
   }
   
   return invertir.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var array =[];
   var comprobacion;
   var iteraciones = 0;
   array = numero.toString().split('');
   iteraciones = (array.length/2);
   iteraciones = Math.floor(iteraciones);
   for (var i=0; i<iteraciones; i++) {
      if (array[i] === array[array.length-1-i]) {
         comprobacion = true;
      }else{
         comprobacion = false;
         break;
      }
   }

   if(comprobacion){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = [];
   var deleteAbc;
   array = string.split('');
   array = array.filter((letra) => letra != "a" );
   array = array.filter((letra) => letra != "b" );
   array = array.filter((letra) => letra != "c" );
   deleteAbc = array.join('');
   return deleteAbc;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   /* var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5] */

   return (arrayOfStrings.sort(
      function (a,b) {
         if (a.lenght>b.length){
            return 1;
         } if (a.length<b.length){
            return -1;
         } else {
            return 0;
         }
      }
   ));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array = [];
   var iteraciones1;
   var iteraciones2;

   if(array1.length < array2.length){
      iteraciones1 = array1.length;
      iteraciones2 = array2.length;
   } else if(array1.length > array2.length){
      iteraciones2 = array1.length;
      iteraciones1 = array2.length;
   } else {
      iteraciones1 = array1.length;
   }

   for (let i=0; i<iteraciones1; i++){
      for (let j=0; j<iteraciones2; j++){
      if(array1[i] === array2[j]){
            array.push(array1[i]);
            break;
         } else {
            continue;
         }
      }
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
