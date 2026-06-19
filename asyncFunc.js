function simularDescarga(nombreArchivo, callback) {
    console.log(`Iniciando descarga de ${nombreArchivo}...`);

    setTimeout(() => {
        console.log(`Descarga de ${nombreArchivo} finalizada.`);
        callback();
    }, 5000);
}

simularDescarga("manual.pdf", () => {
    console.log("Archivo listo para abrir.");
});
