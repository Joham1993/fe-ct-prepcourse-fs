//CANTIDAD DE CARACTERES
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    function contabilizarCaracter (string){
        console.log(string);
        var objeto = {};
        var array =[];
        array = string.split('');
        console.log(array);
        array = array.sort();
        console.log(array);
        for (let i=0; i<array.length; i++){
            if(objeto.hasOwnProperty(array[i])){
                objeto[array[i]] = objeto[array[i]] + 1;
            }else{
                objeto[array[i]] = 1;
            }

        }
        console.log(objeto);
        return objeto;
    }

    var lista = "manzana,pera,banana,mango,mango,banana,pera,manzana";
    contabilizarCaracter(lista);
