document.querySelector("#b-ordenar").onclick = (event) => {
    const ordenAsc = document.querySelector("#r-asc").checked;
    const ordenDesc = document.querySelector("#r-desc").checked;
    peliculasFiltradas.sort((p1, p2) => {
       
     if (ordenAsc ===true) {
           return parseInt(p1.Runtime) - parseInt(p2.Runtime);  // Orden ascendente
       } else if (ordenDesc===true) {
           return parseInt(p2.Runtime) - parseInt(p1.Runtime); // Orden descendente
       }
});
peliculasFiltradas.map(generateCard);
};

// //ordena ascendente/descendente según duración
// document.querySelector("#b-ordenar").addEventListener("click", () => {
//     clearCards();
//     const ordenAscendente = document.querySelector("#r-asc").checked;
//     const ordenDescendente = document.querySelector("#r-desc").checked;
//     const peliculasFiltradas = [...peliculas].sort((a, b) => {

//         Convierte el Runtime a número usando parseInt o parseFloat
//         const runtimeA = parseInt(a.Runtime, 10);
//         const runtimeB = parseInt(b.Runtime, 10);

//         if (ordenAscendente) {
//             return runtimeA - runtimeB;  // Orden ascendente
//         } else if (ordenDescendente) {
//             return runtimeB - runtimeA;  // Orden descendente
//         }
//         return 0;  // En caso de que no se haya seleccionado una opción
//     });

//     peliculasFiltradas.forEach(pelicula => {
//         generateCard(pelicula);
//     });
// });