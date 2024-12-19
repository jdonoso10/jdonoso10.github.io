document.querySelector("#b-ordenar").onclick = (event) => {
  const ordenAsc = document.querySelector("#r-asc").checked;
  const ordenDesc = document.querySelector("#r-desc").checked;
  peliculasFiltradas.sort((p1, p2) => {
    if (ordenAsc === true) {
      return parseInt(p1.Runtime) - parseInt(p2.Runtime); // Orden ascendente
    } else if (ordenDesc === true) {
      return parseInt(p2.Runtime) - parseInt(p1.Runtime); // Orden descendente
    }
  });
  peliculasFiltradas.map(generateCard);
};
