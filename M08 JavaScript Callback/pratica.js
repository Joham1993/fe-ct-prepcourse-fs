//CALLBACK (LLAMAR UNA FUNCION CON OTRA FUNCION)
//Los callbacks son muy útiles en el mundo de la programación, 
//nos aseguran que una función no se va a ejecutar antes de que se complete una tarea,
// sino que se ejecutará justo después de que la tarea se halla completado.

function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado);