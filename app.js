//51ec4268&
let URL = 'https://www.omdbapi.com/?apikey=';


let peliculas;
let peliculasFiltradas;

function processMovie(data) {
    peliculas = data.Search;
    peliculasFiltradas = Array.from(peliculas);//crea nuevo Array
    // generarDesplegableGenero(peliculas);

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

    //6. Año
    const nuevoParrafoAno = document.createElement("p");
    const nuevaNegrilla = document.createElement("strong");
    nuevoParrafoAno.appendChild(nuevaNegrilla);
    nuevaNegrilla.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAno);
    const textAno = document.createTextNode(pelicula.Year);
    nuevoParrafoAno.appendChild(textAno);

    //7. TIPO
    const nuevoParrafoTipo = document.createElement("p");
    const nuevoSpanTipo = document.createElement("strong"); // Crear un nuevo span para el tipo
    nuevoParrafoTipo.appendChild(nuevoSpanTipo);
    nuevoSpanTipo.textContent = "Tipo: ";
    nuevoContenido.appendChild(nuevoParrafoTipo);
    const textTipo = document.createTextNode(pelicula.Type);
    nuevoParrafoTipo.appendChild(textTipo);


    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

//***** Funcion para sacar los TIPOS del .json y crear campos en el desplegable de html
function generarDesplegableTipo(peliculas) {
    //Extraemos los géneros del fichero json 
    let setTipos = new Set();
    peliculas.forEach(pelicula => {
        let tipos = pelicula.Type;
        tipos.forEach(tipo => setTipos.add(tipo));

    });

    // <option value="drama">Drama</option>
    let arrayTipos = Array.from(setTipos);
    arrayTipos.sort().forEach(tipo => {
        let tipoOption = document.createElement("option");
        tipoOption.setAttribute("value", tipo.toLowerCase());
        tipoOption.textContent = tipo;
        document.querySelector("#s-tipo").appendChild(tipoOption);
    });
}

function clearCards() {
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card => card.remove());//Elegante
}