// El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   
var usuario = {
    nombre: "Joham",
    edad: 30,
    posts:[ 
        {post: {numero: 1, likes: 86} }, 
        {post: {numero: 2, likes: 150}}, 
        {post: {numero: 3, likes: 50} },
        ],
    info: 
        function (){
        return (usuario);
        } 
};
console.log(usuario.info());

var total=0;

//posible solucion:   usuario.posts.forEach( (post) => {total += post.likes} );

for (var i=0; i<usuario.posts.length; i++){
    total += usuario.posts[i].post.likes;
    console.log("este es el valor de los likes: "+usuario.posts[i].post.likes);
    console.log("este es el valor total de los likes " + total + " en la iteracion No." + (i+1));
 }
console.log("El total de likes es: " + total);

