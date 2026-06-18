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
