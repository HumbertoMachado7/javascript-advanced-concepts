¡Es hora de poner a prueba cuánto sabes sobre JavaScript!
Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.
Instrucciones para tomar esta prueba
•	Evalúa muy críticamente tu conocimiento.
•	Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
•	Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
•	Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.
Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.
¡Mucha suerte!
Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
•	¿Qué es una variable y para qué sirve?
•	¿Cuál es la diferencia entre declarar e inicializar una variable?
•	¿Cuál es la diferencia entre sumar números y concatenar strings?
•	¿Cuál operador me permite sumar o concatenar?
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
•	Nombre
•	Apellido
•	Nombre de usuario en Platzi
•	Edad
•	Correo electrónico
•	Mayor de edad
•	Dinero ahorrado
•	Deudas
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
•	Nombre completo (nombre y apellido)
•	Dinero real (dinero ahorrado menos deudas)
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
•	¿Qué es una función?

    Las funciones nos permiten encapsular (guardar) bloques de codigo para reutilizarlos y ejecturarlos en el futuro.

•	¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloques de codigo muy parecidos (con cambios que podrian ser parametros y argunetos) que podemos encapsular para reutilicar mas de una vez en el futuro.

Tambien nos sirve para ordenar y mejorar la legibilidad del codigo.

•	¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludo (name,lastname,nickname){
    const completeName = name+" " + lastname;
    return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
}

```
let mensaje = saludo ("Humberto","Machado","Canario");
console.log(mensaje);
Mi nombre es Humberto Machado, pero prefiero que me digas Canario.
```

Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

•	¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de codigo  u otro dependiendo de algunba condicion o validacion.

•	¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if (else y else if), switch.
El condicional if (con else y else if) nos permite hace validaciones completamente distintas (si asi queremos) en cada validacion o condional.
En cambio en el switch, todos los cases se comparan con la misma variable o condicion que definimos en el switch. Por eso es importante escribir break al terminar cada case, en caso que quiera terminar el bloque de comparaciones con el case. 

•	¿Puedo combinar funciones y condicionales?

Si. Las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

```
const tipoDeSuscripcion = "Basic';

if (tipoDeSuscripcion == "Basic"){
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus"){
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```
const tipoDeSuscripcionActual = "Expert";
/**
 * Función que imprime un mensaje basado en el tipo de suscripción,
 * usando únicamente sentencias `if`.
 * @param {string} tipo - El tipo de suscripción (ej. "Free", "Basic").
 */
function imprimirMensajeConSoloIfs(tipo) {
    // Nota: Esta aproximación es ineficiente porque el programa debe
    // evaluar CADA una de las condiciones, incluso si ya encontró la correcta.
    if (tipo === 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
    }
    if (tipo === 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if (tipo === 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if (tipo === 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}

console.log("--- Ejecución con 'solo ifs' ---");
imprimirMensajeConSoloIfs(tipoDeSuscripcionActual);
console.log("-----------------------------\n");
```

💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

/**
 * Esta es la solución recomendada y profesional.
 * Separa los datos (los mensajes) de la lógica (la función).
 */

// Paso 1: Creamos un objeto que actúa como un "diccionario" o "mapa".
// Las llaves son los tipos de suscripción y los valores son los mensajes.
const mensajesPorSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    // Podríamos añadir un caso por defecto aquí si quisiéramos
    // default: "No tienes una suscripción activa, ¡anímate a empezar!",
};

/**
 * Función que obtiene el mensaje de suscripción usando el objeto `mensajesPorSuscripcion`.
 * @param {string} tipo - El tipo de suscripción.
 * @returns {string} - El mensaje correspondiente o uno por defecto si no se encuentra.
 */
function obtenerMensajeConObjeto(tipo) {
    // Paso 2: Usamos un solo condicional para manejar todos los casos.
    // Si la llave `tipo` existe en nuestro objeto, `mensajesPorSuscripcion[tipo]`
    // devolverá el mensaje (un valor "truthy"). Si no existe, devolverá `undefined` (un valor "falsy").
    if (mensajesPorSuscripcion[tipo]) {
        return mensajesPorSuscripcion[tipo];
    } else {
        // Este es nuestro caso por defecto, si el tipo de suscripción no existe.
        return "Lo sentimos, ese tipo de suscripción no existe.";
    }
}

console.log("--- Ejecución con el método 'Bonus' (Objetos) ---");
const mensajeFinal = obtenerMensajeConObjeto(tipoDeSuscripcionActual);
console.log(mensajeFinal);


Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

•	¿Qué es un ciclo?

La forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

•	¿Qué tipos de ciclos existen en JavaScript?

While, for, do while.

•	¿Qué es un ciclo infinito y por qué es un problema?

Es cuando la validacion de nuestros condicionales nunca se cumple y termina danñando la aplicacion. (El navegador ya no puede mas de tanta ejecucion de ese bloque de codigo)

•	¿Puedo mezclar ciclos y condicionales?

Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

```
while (i<5){
    console.log("El valor de i es: " + i);
    i++;
}
```

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

```
i = 0;
while (i>=2) {
    return "El valor de i es: " + i;
    i = i + 2
}
```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.


```
console.log("Iniciando el desafío...");
while (true) {
    const respuestaUsuario = prompt("¿Cuánto es 2 + 2?");
    if (respuestaUsuario === null) {
        console.log("El usuario canceló el desafío. Saliendo del bucle.");
        break; // Salimos del bucle para no continuar.
    }

    if (respuestaUsuario.trim() === '4') {
        alert("¡Felicitaciones! 🎉 La respuesta es correcta.");
        console.log("El usuario respondió correctamente.");
        break; // La respuesta es correcta, así que salimos del bucle.
    }
    alert("Respuesta incorrecta. ¡Intenta de nuevo!");
}

console.log("Desafío finalizado.");
```


Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

•	¿Qué es un array?

Es una lista de elementos.
```
const array =[];
const array2 = [1,"Hola", true, false];
```

•	¿Qué es un objeto?

Es una lista de elementos Pero cada elemento tiene un nombre clave.
```
const obj = {
    nombre: "Humberto",
    edad: 40
};
```

•	¿Cuándo es mejor usar objetos o arrays?

Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplor). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestsro algoritmo.

•	¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Si. Los arrays pueden guardar objetos.
Y los objetos pueden guardar arrays entres sus propiedades.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
function imprimirPrimerElemento (arr){
    console.log (arr[0]);
} 
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirTodoElArray(arr){
    for (let i = 0, i < arr.length; i++){
        console.log (arr[i]);
    }
}
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
funtion imprimirElementoObjeto (obj){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```


¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.
Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes. Y tú deberías de saberlo también.
¡Te espero en la siguiente clase para comenzar!

