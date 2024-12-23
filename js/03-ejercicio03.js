// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(lado1, lado2) {
        this._alto = lado1;
        this._ancho = lado2;
    }

    set cambiarAltura(nuevaAltura){
        this._alto = nuevaAltura
    }

    set cambiarAncho(nuevoAncho){
        this._ancho = nuevoAncho
    }

    get altoRectangulo(){
        return this._alto
    }

    get anchoRectangulo(){
        return this._ancho
    }

    get area(){
        return this._alto * this._ancho
    }

    get perimetro(){
        return 2 * (this._alto + this._ancho)
    }
    detalle(){
        return `<p>El rectangulo tiene una altura de ${this.altoRectangulo}cm y un ancho de ${this.anchoRectangulo}cm</p>`
    }
}

document.write(`<h2>Primer Rectangulo</h2>`)

let rectangulo1 = new Rectangulo(10, 9);
document.write(`${rectangulo1.detalle()}`)
document.write(`El area del rectangulo es ${rectangulo1.area}cm2 y su perimetro es ${rectangulo1.perimetro}cm`)

document.write(`<h4>Modificar el rectangulo</h4>`)
rectangulo1.cambiarAltura = 20;
rectangulo1.cambiarAncho = 30;

document.write(`${rectangulo1.detalle()}`)