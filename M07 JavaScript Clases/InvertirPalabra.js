function invertirString (string){
    var array = [];
    var inversa = [];
    var palabraInversa;

    array = string.split('');

    console.log(string);
    console.log(array);
    
    for (var i = array.length; i > 0; i--){
            inversa[(array.length-i)] = array[i-1];
    }

    palabraInversa = inversa.join('');
    console.log(inversa);
    console.log(palabraInversa);

    return palabraInversa;
}

var palabra = "Joham";
invertirString (palabra);

