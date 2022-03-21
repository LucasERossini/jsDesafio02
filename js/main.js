//! Variables
const prod1 = 10;
const prod2 = 20;
const prod3 = 30;
const prod4 = 40;
let prod = parseInt(prompt('Ingrese el número correspondiente al producto que desea comprar: \n\n 1- Producto 1: $10 \n 2- Producto 2: $20 \n 3- Producto 3: $30 \n 4- Producto 4: $40 \n 0- Ninguno (finaliza el programa)'));
let lista = "";
let suma = 0;

//! Función para agregar pruducto a la lista
function list(prod) {
    switch (prod) {
    case 1: 
        lista = lista + "\n-Producto 1: $10";
        break;
    case 2:
        lista = lista + "\n-Producto 2: $20";
        break;
    case 3:
        lista = lista + "\n-Producto 3: $30";
        break;
    case 4:
        lista = lista + "\n-Producto 4: $40";
        break;
    default:
        break;
    };
     return lista;
 };

//! Función para sumar precio del producto elegido
function carrito(prod) {
   switch (prod) {
    case 1: 
        suma = suma + prod1;
        break;
    case 2:
        suma = suma + prod2;
        break;
    case 3:
        suma = suma + prod3;
        break;
    case 4:
        suma = suma + prod4;
        break;
    default:
        break;
    };
    return suma;
};

//! Condicional de fin de programa
if (prod == 0) {
    alert('No eligió ningún producto. Fin del programa.');
} else {
    //! Ciclo while para agregar productos al carrito
    while ((prod != 0)) {
        //! Condicional para limitar ingresos a opciones válidas
        if (prod >=5) {
            prod = parseInt(prompt('No ingresó una opción válida. Vuelva a ingresar un número'));
        } else {
            suma = carrito(prod);
            lista = list(prod);
            alert('Los productos agregados hasta ahora son:' + lista + '\n\nY el total hasta ahora es de $' + suma + '.');
            prod = parseInt(prompt('Ingrese el número correspondiente al producto que desea comprar: \n\n 1- Producto 1: $10 \n 2- Producto 2: $20 \n 3- Producto 3: $30 \n 4- Producto 4: $40 \n 0- Ninguno (finaliza el programa)'));
        };
    };
    alert('La lista final de productos es: ' + lista + '\n\nY el total final es de $' + suma + '\n\nFin del programa.');
};