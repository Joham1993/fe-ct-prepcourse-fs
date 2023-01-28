    // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
    // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
    // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
    // Luego debes restar del precio total del producto ese valor de descuento.
    // Retornar el precio final.
    // Ejemplo:
    // Precio ---> 10
    // PorcentajeDeDescuento ---> 0.2
    // Precio final ---> 8
    // Tu código:
    var objetoProducto = {
        nombre: "papa",
        precio: 10,
        porcentajeDeDescuento: 0.2
    };

function descuentoProducto (objeto){
    var descuento=0;
    descuento = (objeto.precio - (objeto.precio*objeto.porcentajeDeDescuento));
    return descuento;
};

objetoProducto.calcularPrecioDescuento = descuentoProducto(objetoProducto);
console.log(objetoProducto);