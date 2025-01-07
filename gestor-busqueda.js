// Evento para el botón de búsqueda
document.getElementById('b-buscar-omdb').addEventListener('click', function () {
    let titulo = document.getElementById('t-titulo-omdb').value;
    let apikey = document.getElementById('t-apikey').value;

    if (titulo) {
        let url = URL + apikey + `&s=${encodeURIComponent(titulo)}`;
        clearCards();  // Limpiar las tarjetas anteriores
        doGetRequest(url, processMovie);  // Llamamos a doGetRequest con la URL y la función de procesamiento
    } else {
        alert("Por favor, ingresa un título de película.");
    }
});



//Se busca pulsando el boton buscar de titulo
document.querySelector("#b-titulo").addEventListener("click", () => {
  filtrarPeliculas("#t-titulo", "Title");
});

document.querySelector("#s-tipo").addEventListener("change", () => {
    filtrarPeliculas("#s-tipo", "Type");
});

document.querySelector("#b-anyo").addEventListener("click", () => {
  filtrarPeliculas("#t-anyo", "Year");
});

document.querySelector("#b-reiniciar").addEventListener("click", () => {
    document.querySelector("#t-titulo");
    filtrarPeliculas("#t-titulo", value);
})

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
