// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    get getIsbn() {
        return this.isbn;
    }

    setIsbn(nuevoIsbn) {
        this.isbn = nuevoIsbn;
    }

    mostrarLibro() {
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
}

const libro1 = new Libro("978-3-16-148410-0", "Harry Potter", "J. K. Rowlling", 309);
const libro2 = new Libro("978-84-9759-945-8", "Narnia", "C. S. Lewis", 208);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
    console.log("El libro con más páginas es:", libro1.titulo);
} else if (libro1.numPaginas < libro2.numPaginas) {
    console.log("El libro con más páginas es:", libro2.titulo);
} else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
}