// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

class Cuenta {
    constructor(titular) {
        this._titular = titular;
        this._saldo = 0;
    }

    ingresar(monto){
        this._saldo += monto;
        document.write(`<p>Ingreso $${monto}</p>`)
    }

    extraer(monto){
        if (this._saldo >= monto) {
            this._saldo -= monto
            document.write(`<p>Extrajo: $${monto}</p<>`)
        } else{
            document.write(`<p>No hay suficiente saldo</p>`)
        }
    }

    informar(){
        document.write(`<p>La cuenta del ${this._titular}, posee un saldo de $ ${this._saldo}</p>`)
    }
}

const cuenta = new Cuenta(`Alex`);
cuenta.informar();
cuenta.ingresar(5000);
cuenta.informar();
cuenta.extraer(2500);
cuenta.informar();