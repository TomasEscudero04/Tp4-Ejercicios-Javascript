// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
    constructor(codigo, nombre, precio) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;

    }

    imprimeDatos(){
        document.write(`Codigo: ${this._codigo}, Nombre: ${this._nombre}, Precio: ${this._precio}`)
    }
}

const producto1 = new Producto(58642, "Puré", 2500);
const producto2 = new Producto(46278, "Fideos", 1800);
const producto3 = new Producto(39465, "Arroz", 1150);

const productos = [producto1. producto2, producto3];

productos.forEach(producto =>{
    producto.imprimeDatos()
});