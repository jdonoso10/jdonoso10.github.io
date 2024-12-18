
//Se busca pulsando el boton buscar de tiulo
document.querySelector("#b-titulo").addEventListener("click", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Se busca por cada pulsación en la caja de texto de Título
/*
document.querySelector("#t-titulo").addEventListener("input", () => {
    filtrarPeliculas("#t-titulo","Title");
});


document.querySelector("#b-actor").addEventListener("click", () => {
    filtrarPeliculas("#t-actor", "Actors");
});

//Se busca cuando se pulsa el botón de Buscar en la sección género
/*
document.querySelector("#b-genero").addEventListener("click", () => {
    filtrarPeliculas("#s-genero","Genre");
});
*/

document.querySelector("#s-genero").addEventListener("change", () => {
    filtrarPeliculas("#s-genero", "Genre");
});

document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
    clearCards();
    const textoBusqueda = document.querySelector(idElementoBusqueda).value;
    peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula[nombreAtributoBusqueda]
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);
}



// ********** Primera version antes de refactorizar el código ********


// //busca por título
// document.querySelector("#b-titulo").addEventListener("click", () => {
//     clearCards();
//     const textoBusqueda = document.querySelector("#t-titulo").value;
//     const peliculasFiltradas =
//         peliculas.filter(pelicula =>
//             pelicula.Title
//                 .toUpperCase()
//                 .includes(textoBusqueda.trim().toUpperCase()));


//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
//     // otra forma de filtrar, en lugar de "forEach", usando "map" pero funciona igual:
//     // peliculasFiltradas.map(generateCard);
// });

// /*
// //Se busca por cada pulsación
// document.querySelector("#t-titulo").addEventListener("input", () => {
//     clearCards();
//     const textoBusqueda = document.querySelector("#t-titulo").value;
//     const peliculasFiltradas =
//         peliculas.filter(pelicula =>
//             pelicula.Title
//                 .toUpperCase()
//                 .includes(textoBusqueda.trim().toUpperCase()));
//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
// });
// */


// busca por nombre de actor/actriz
// document.querySelector("#b-actor").addEventListener("click", () => {
//     clearCards();
//     const textoBusqueda = document.querySelector("#t-actor").value;
//     const peliculasFiltradas =
//         peliculas.filter(pelicula =>
//             pelicula.Actors
//                 .toUpperCase()
//                 .includes(textoBusqueda.trim().toUpperCase()));
//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
// });

// busca por Género en el desplegable
// document.querySelector("#s-genero").addEventListener("change", () => {
//     clearCards();
//     const textoBusqueda = document.querySelector("#s-genero").value;
//     const peliculasFiltradas =
//         peliculas.filter(pelicula =>
//             pelicula.Genre
//                 .toUpperCase()
//                 .includes(textoBusqueda.trim().toUpperCase()));
//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
// });

// busca por año
// document.querySelector("#b-anyo").addEventListener("click", () => {
//     clearCards();
//     const textoBusqueda = document.querySelector("#t-anyo").value;
//     const peliculasFiltradas =
//         peliculas.filter(pelicula =>
//             pelicula.Year
//                 .toUpperCase()
//                 .includes(textoBusqueda.trim().toUpperCase()));
//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
// });