// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, añoDeNac) {
        this._nombre = nombre;
        this._edad = edad;
        this._DNI = DNI;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._añoDeNac = añoDeNac;
    }

    mostrarGeneracion(){
        const generación = this.calcularGeneracion();
        document.write(`${this.nombre} pertenece a la generacion: ${generación}`);

        switch (generacion) {
            case 'Generacion Z(1994-2010)':
              document.write('<br>Poblacion: 7.800.000'
                `<br>Circusntancia Historica: expansion masiva de internet`
                `<br>Rasgo caracteristico: irreverencia`
              );
              break;
            case 'Millenials(1981-1993)':
              document.write('<br>Poblacion: 7.200.000'
                `<br>Circusntancia Historica: inicio de la digitalizacion`
                `<br>Rasgo caracteristico: frustracion`
              );
              break;
            case 'Generacion X(1969-1980)':
              document.write('<br>Poblacion: 9.300.000'
                `<br>Circusntancia Historica: crisis del 73 y transicion española`
                `<br>Rasgo caracteristico: obsesion por el exito`
              );
              break;
            case 'Baby Boom(1949-1968)':
              document.write('<br>Poblacion: 12.200.000'
                `<br>Circusntancia Historica: paz y explosion demografica`
                `<br>Rasgo caracteristico: ambicion`
              );
              break;
            case 'Silent Generation(1930-1948)':
              document.write('<br>Poblacion: 6.300.000'
                `<br>Circusntancia Historica: conflictos belicos`
                `<br>Rasgo caracteristica: austeridad`
              );
              break;
            default:
              console.log('Generación no identificada o de cristal jajaja.');
    }
}

calcularGeneracion(){
    const añoDeNac = this._añoDeNac;

    if (añoDeNac >= 1930 && añoDeNac <= 1948) {
        return `Silent Generation`
    } else if (añoDeNac >= 1949 && añoDeNac <= 1968) {
        return `Baby Boom`
    } else if (añoDeNac >= 1969 && añoDeNac <= 1980) {
        return `Generacion X`
    } else if (añoDeNac >= 1981 && añoDeNac <= 1993) {
        return `Millenials`
    } else if (añoDeNac >= 1994 && añoDeNac <= 2010) {
        return `Generacion Z`
    }
}

esMayorDeEdad(){
    const edad = this._edad;

    if (edad >= 18) {
        document.write("Es Mayor de edad")
    }
}

mostrarDatos(){
    return `Nombre: ${this._nombre}, Edad: ${this._edad}, DNI: ${this._DNI}, Sexo: ${this._sexo}, Peso: ${this._peso}kg, Altura: ${this._altura}m, Año de nacimiento: ${this._añoDeNac}`
}

generaDNI(){
    const dniAleatorio = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    return dniAleatorio;
}

}