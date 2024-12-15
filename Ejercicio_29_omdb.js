const API_KEY = "fe486a03";
const COMMON_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

//'https://www.omdbapi.com/?apikey=fe486a03&t=Star Wars'

// function processData(pelicula){
//     console.log(pelicula);
// }

function doRequest(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      processData(data);
    })
    .catch((error) => console.error("Fetch error:", error));
}
//Ejercicio 1
//doRequest(COMMON_URL + "t=Batman");
//Mostrar por pantalla el título, el director y los actores (por separado, hay que utilizar split).

// function processData(pelicula) {
//   if (pelicula.Response === "False") {
//     console.error("Movie not found");
//     return;
//   }

//   // Show title, director, and actors
//   const title = pelicula.Title;
//   const director = pelicula.Director;
//   const actors = pelicula.Actors;

//   // Split actors into an array
//   const actorsArray = actors.split(", ");

//   // Display results
//   console.log("Title:", title);
//   console.log("Director:", director);
//   console.log("Actors:", actorsArray.join(", "));
// }

//Ejercicio 2
//doRequest(COMMON_URL + 's=Star Wars');
//Mostrar el título y el año de las películas estrenadas en el año 2000 y sucesivos

function processData(peliculas) {
  if (peliculas.Response === "False") {
    console.error("No movies found");
    return;
  }

  // Iterate over the movies in the Search array
  peliculas.Search.forEach((movie) => {
    const title = movie.Title;
    const year = movie.Year;

    // Display movies from 2000 or later
    if (parseInt(year) >= 2000) {
      console.log(`Title: ${title}, Year: ${year}`);
    }
  });
}

doRequest(COMMON_URL + "s=Star Wars");
