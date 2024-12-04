function ocultarLibros() {
    //1. Hacer desaparecer todos los libros
    document.querySelectorAll(".libro").forEach((libro) => {
        libro.style.display = "None";
    });
}

document.querySelector("#boton-filosofia").addEventListener("click", () => {
    //1. Hacer desaparecer todos los libros
    ocultarLibros();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".filosofia").forEach((libro) => {
        libro.style.display = "Block";
    });
});
document.querySelector("#boton-fantasia").addEventListener("click", () => {
    //1. Hacer desaparecer todos los libros
    ocultarLibros();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".fantasia").forEach((libro) => {
        libro.style.display = "Block";
    });
});
document.querySelector("#boton-horror").addEventListener("click", () => {
    //1. Hacer desaparecer todos los libros
    ocultarLibros();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".horror").forEach((libro) => {
        libro.style.display = "Block";
    });
});
document.querySelector("#boton-todos").addEventListener("click", () => {
    document.querySelectorAll(".libro").forEach((libro) => {
        libro.style.display = "Block";
    });
});
document.querySelector("#genero").addEventListener("change", () => {
    let generoLibro = document.querySelector("#genero").value;
    ocultarLibros();
    document.querySelectorAll("."+generoLibro).forEach((libro) => {
        libro.style.display = "block";
    });
});