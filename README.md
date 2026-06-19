**Parte 1**

¿Qué ventaja tiene enviar una función como parámetro?
- Que la puedo ejecutar dentro de otra funcion


¿Qué ocurre si enviamos una función diferente como callback?
- La funcion enviada se ejecutara 

¿La función principal necesita conocer qué operación matemática se ejecutará?
- Si, ya que recibe 3 parametros (puede ser n parametros), sin embargo, si la funcion recibe algo diferente a una funcion arrojara un error

**Parte 2**
- Orden: - Inicio del programa
         - Iniciando tarea no bloqueante
         - Continuando despues de la tarea
         - Tarea completada (2 seg despues)
         - Fin del programa

- Resultado: Adjunto en Evidences/P2.png

- No coincidio prediccion con resultado

- Esto sucede debido al timeout

**Parte 3**

¿Cuál terminó primero?
- Audio finalizado

¿Cuál terminó último?
- Datos del sensor listos

¿Por qué el orden de finalización es diferente al orden de ejecución?
- Por el timeout

**Parte 4**

- La invocacion de la funcion (linea 10) envia el nombre del archivo para que la consola lo muestre en la linea formateada
- Se tiene un delay de 5 segundos hasta que la descarga finaliza
- La ultima linea muestra que el archivo esta listo para ser abierto

**Parte 5**

Describe el problema visual que presenta el código.
- Un claro ejemplo de callback hell

Explica qué es el Callback Hell.
- El callback hell es un problema que ocurre al tener una funcion que se anida y recibe resultado de otra mas arriba en un bucle 

¿Por qué dificulta el mantenimiento de aplicaciones grandes?
- Al una funcion depender del resultado de otra y asi sucesivamente 

Investiga y menciona dos alternativas modernas para evitar este problema.
- Usar async/await para que el codigo parezca mas sincrono
- Usar funciones con nombre (invocaciones)
