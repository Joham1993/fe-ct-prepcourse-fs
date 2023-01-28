//Convertir un objeto a Matriz
var objUsuario = {
    nombre: "joham",
    edad: 30,
    pais: "colombia",
};


var arrUsuario = [];
var arrPropiedad = [];
var arrDato = [];

arrPropiedad = Object.getOwnPropertyNames(objUsuario);
arrDato = Object.values(objUsuario);

for (index in objUsuario){
    arrUsuario.push([index, objUsuario[index]])
};  

console.log("Este es el objeto: ");
console.log(objUsuario);
console.log("Este es el array de las propiedades del obj: ");
console.log(arrPropiedad);
console.log("Este es el array de los valores de las propiedades del obj: " );
console.log(arrDato);
console.log("Esta seeria la representacion de un objeto en forma de matriz: ");
console.log(arrUsuario);

//Convertir una Matriz en objeto
var objetoNuevo;
objetoNuevo = Object.fromEntries(arrUsuario);
console.log(objetoNuevo);