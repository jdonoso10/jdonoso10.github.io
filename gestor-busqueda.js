//Se busca pulsando el boton buscar de tiulo
document.querySelector("#b-titulo").addEventListener("click", () => {
  filtrarPeliculas("#t-titulo", "Title");
});

document.querySelector("#s-genero").addEventListener("change", () => {
  filtrarPeliculas("#s-genero", "Genre");
});

document.querySelector("#b-anyo").addEventListener("click", () => {
  filtrarPeliculas("#t-anyo", "Year");
});

function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
  clearCards();
  const textoBusqueda = document.querySelector(idElementoBusqueda).value;
  peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula[nombreAtributoBusqueda]
      .toUpperCase()
      .includes(textoBusqueda.trim().toUpperCase())
  );
  peliculasFiltradas.map(generateCard);
}
