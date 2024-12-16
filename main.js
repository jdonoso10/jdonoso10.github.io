document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const clearButton = document.getElementById("clear-button");
  const moviesContainer = document.getElementById("movies-container");

  // Load movie data (replace with actual data or a fetch to movies-250.json)
  let movies = []; // This will be populated with movie data

  // Fetch the movies-250.json data
  fetch("movies-250.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the movies array inside the object
      movies = data.movies; // This assumes that your JSON structure has the "movies" array
      displayMovies(movies); // Display all movies on initial load
    })
    .catch((err) => console.error("Error loading movies data:", err));

  // Display the movies on the page
  function displayMovies(moviesList) {
    // Ensure that moviesList is an array
    if (!Array.isArray(moviesList)) {
      console.error("Movies data is not an array:", moviesList);
      return;
    }

    moviesContainer.innerHTML = ""; // Clear previous movies
    if (moviesList.length === 0) {
      moviesContainer.innerHTML =
        '<p class="no-movies-message">No movies found</p>';
      return;
    }

    // Loop through the movies and display each movie card
    moviesList.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      // Create the movie card HTML with title, year, genre, actors, and poster
      movieElement.innerHTML = `
              <img src="${movie.Poster}" alt="${movie.Title} poster" />
              <div class="movie-title">${movie.Title} (${movie.Year})</div>
              <p>Year: ${movie.Year}</p> <!-- Added Year here -->
              <p>Genre: ${movie.Genre}</p>
              <p>Actors: ${movie.Actors}</p>
              <p>Duration: ${movie.Runtime}</p>
          `;

      // Append the movie card to the container
      moviesContainer.appendChild(movieElement);
    });
  }

  // Filter movies based on form inputs
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    const title = document.getElementById("title").value.toLowerCase();
    const actor = document.getElementById("actor").value.toLowerCase();
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;
    const sortDuration = document.getElementById("sortDuration").value;

    let filteredMovies = movies;

    // Apply filters
    if (title) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(title)
      );
    }
    if (actor) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Actors.toLowerCase().includes(actor)
      );
    }
    if (genre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Genre.toLowerCase().includes(genre)
      );
    }
    if (year) {
      filteredMovies = filteredMovies.filter((movie) => movie.Year === year);
    }

    // Sort by duration (runtime)
    if (sortDuration) {
      filteredMovies = filteredMovies.sort((a, b) => {
        const runtimeA = parseInt(a.Runtime);
        const runtimeB = parseInt(b.Runtime);

        if (sortDuration === "ascending") {
          return runtimeA - runtimeB;
        } else {
          return runtimeB - runtimeA;
        }
      });
    }

    displayMovies(filteredMovies); // Display the filtered movies
  });

  // Clear the form and reset the display
  clearButton.addEventListener("click", () => {
    form.reset();
    displayMovies(movies); // Display all movies again when cleared
  });
});
