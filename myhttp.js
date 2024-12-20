// Función para hacer la solicitud GET
function doGetRequest(url, processMovie) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processMovie(data);  // Usamos 'processMovie' para manejar los datos
        })
        .catch((error) => console.error("Fetch error:", error));
}