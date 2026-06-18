function solicitarJSON(callback) {
    setTimeout(function(){
        callback();
    }, 2000)
}


function reproducirAudio(callback) {
    setTimeout(function(){
        callback();
    }, 1000)
}


function leerSensor(callback) {
    setTimeout(function(){
        callback();
    }, 5000)
}

console.log("--- Iniciando procesos asíncronos ---");

solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));
