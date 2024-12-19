const URL = 'https://fpaniaguajavascript.github.io/movies-250.json';

let peliculas;
let peliculasFiltradas;

function processMovie(data) {
    peliculas = data.movies;
    peliculasFiltradas = Array.from(peliculas);//crea nuevo Array
    generarDesplegableGenero(peliculas);

    //     Recorremos con bucle tradicional:
    //     for (let i=0;i<peliculas.length;i++) {
    //         console.log("Duration: " + peliculas[i].Runtime);
    //     }

    //    Recorremos con bucle for-of, recorre colecciones
    //     for (pelicula of peliculas) {
    //         console.log("Director: " + pelicula.Director);
    //     }

    //     Recorremos con for-in, recorre el contenido de un objeto
    //     for (atributo in peliculas[0]) {
    //         console.log(atributo, peliculas[0][atributo]);
    //     }


    //     Recorremos con el método forEach:
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
        // console.log("Título: " + pelicula.Title);

    });
}

function generateCard(pelicula) {
    //0. mostrar nº de resultados
    document.querySelector("#resultados").textContent="Mostrando: " + peliculasFiltradas.length + " resultado(s)";
    console.log(peliculasFiltradas.length);

    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class", "card");

    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class", "card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //5. Crear el director <p><strong>Director:</strong> Francis Ford Coppola</p>
    const nuevoParrafoDirector = document.createElement("p");
    const nuevaNegrita = document.createElement("strong");
    nuevoParrafoDirector.appendChild(nuevaNegrita);
    nuevaNegrita.textContent = "Director: ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director);
    nuevoParrafoDirector.appendChild(textoDirector);

    //6. Año
    const nuevoParrafoAno = document.createElement("p");
    const nuevaNegrilla = document.createElement("strong");
    nuevoParrafoAno.appendChild(nuevaNegrilla);
    nuevaNegrilla.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAno);
    const textAno = document.createTextNode(pelicula.Year);
    nuevoParrafoAno.appendChild(textAno);

    //7. Género
    const nuevoParrafoGenero = document.createElement("p");
    const nuevoSpanGenero = document.createElement("strong"); // Crear un nuevo span para el género
    nuevoParrafoGenero.appendChild(nuevoSpanGenero);
    nuevoSpanGenero.textContent = "Género: ";
    nuevoContenido.appendChild(nuevoParrafoGenero);
    const textGenero = document.createTextNode(pelicula.Genre);
    nuevoParrafoGenero.appendChild(textGenero);

    //8. Duración
    const nuevoParrafoDuracion = document.createElement("p");
    const nuevoSpanDuracion = document.createElement("strong"); // Crear un nuevo span para la duración
    nuevoParrafoDuracion.appendChild(nuevoSpanDuracion);
    nuevoSpanDuracion.textContent = "Duración: ";
    nuevoContenido.appendChild(nuevoParrafoDuracion);
    const textDuracion = document.createTextNode(pelicula.Runtime);
    nuevoParrafoDuracion.appendChild(textDuracion);


    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

//***** Funcion para sacar los géneros del .json y crear campos en el desplegable de html
function generarDesplegableGenero(peliculas) {
    //Extraemos los géneros del fichero json 
    let setGeneros = new Set();
    peliculas.forEach(pelicula => {
        let generos = pelicula.Genre.split(',').map(genero => genero.trim());
        generos.forEach(genero => setGeneros.add(genero));

    });

    //<option value="drama">Drama</option>
    let arrayGeneros = Array.from(setGeneros);
    arrayGeneros.sort().forEach(genero => {
        let generoOption = document.createElement("option");
        generoOption.setAttribute("value", genero.toLowerCase());
        generoOption.textContent = genero;
        document.querySelector("#s-genero").appendChild(generoOption);
    });
}

function clearCards() {
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card => card.remove());//Elegante
}


doGetRequest(URL, processMovie);
