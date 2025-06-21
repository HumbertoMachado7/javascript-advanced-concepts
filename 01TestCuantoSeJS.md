# Test de Habilidades en JavaScript

Esta es una prueba de autoevaluación para medir tu conocimiento en JavaScript. A diferencia de un examen, el único juez eres tú. El objetivo es identificar áreas de oportunidad para fortalecer tus bases.

### Instrucciones

*   **Evalúa tu conocimiento críticamente.** Si puedes resolver la prueba sin dificultad, tienes una base sólida para continuar.
*   **Si encuentras dificultades, ¡es una victoria!** Has identificado exactamente qué necesitas repasar. Vuelve a los materiales de estudio sobre esos temas específicos.
*   **La consulta es válida.** Usar Google, notas o tutoriales es parte del proceso de aprendizaje de un desarrollador profesional. El objetivo no es memorizar, sino saber cómo resolver problemas.

El éxito no se mide por la velocidad, sino por la profundidad del entendimiento.

---

### Variables y Operaciones

**1️⃣ Responde las siguientes preguntas:**

*   **¿Qué es una variable y para qué sirve?**
*   **¿Cuál es la diferencia entre declarar e inicializar una variable?**
*   **¿Cuál es la diferencia entre sumar números y concatenar strings?**
*   **¿Cuál operador me permite sumar o concatenar?**

**2️⃣ Determina el nombre y tipo de dato para la siguiente información:**

*   Nombre: `string`
*   Apellido: `string`
*   Nombre de usuario en Platzi: `string`
*   Edad: `number`
*   Correo electrónico: `string`
*   Mayor de edad: `boolean`
*   Dinero ahorrado: `number`
*   Deudas: `number`

**3️⃣ Traduce a código JavaScript las variables del punto anterior.**

**4. Calcula e imprime las siguientes variables a partir de las anteriores:**

*   Nombre completo (nombre y apellido).
*   Dinero real (dinero ahorrado menos deudas).

---

### Funciones

**1️⃣ Responde las siguientes preguntas:**

*   **¿Qué es una función?**

    Las funciones nos permiten encapsular bloques de código para reutilizarlos y ejecutarlos en el futuro.

*   **¿Cuándo me sirve usar una función en mi código?**

    Son útiles cuando tenemos lógica que se repite en varias partes de la aplicación. Encapsular esta lógica en una función mejora la legibilidad, facilita el mantenimiento y reduce la duplicación de código.

*   **¿Cuál es la diferencia entre parámetros y argumentos de una función?**

    Los **parámetros** son las variables que se listan en la definición de la función. Los **argumentos** son los valores reales que se pasan a la función cuando esta es invocada.

**2️⃣ Convierte el siguiente código en una función pura:**

*Código original:*
```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

*Solución:*
```javascript
/**
 * Crea un saludo personalizado.
 * @param {string} name - El nombre de la persona.
 * @param {string} lastname - El apellido de la persona.
 * @param {string} nickname - El apodo de la persona.
 * @returns {string} Un mensaje de saludo completo.
 */
function crearSaludo(name, lastname, nickname) {
    const completeName = `${name} ${lastname}`;
    return `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`;
}

// La función se invoca y su resultado se almacena antes de imprimirlo.
const mensaje = crearSaludo("Humberto", "Machado", "Canario");
console.log(mensaje);
```

---

### Condicionales

**1️⃣ Responde las siguientes preguntas:**

*   **¿Qué es un condicional?**

    Son estructuras de control que permiten ejecutar diferentes bloques de código dependiendo de si una condición se evalúa como verdadera o falsa.

*   **¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**

    `if/else if/else` y `switch`. La estructura `if` permite evaluar condiciones completamente diferentes y complejas en cada bloque. El `switch`, en cambio, compara una única variable contra múltiples valores (`case`), lo cual es más eficiente y legible para esos escenarios específicos.

*   **¿Puedo combinar funciones y condicionales?**

    Sí. Las funciones pueden contener cualquier tipo de lógica, incluyendo condicionales, para tomar decisiones basadas en sus parámetros o en el estado del programa.

**2️⃣ Replica el comportamiento de `switch` con `if/else if`:**

*Código original (`switch`):*
```javascript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   // ... y otros casos
}
```

*Solución (`if/else if`):*
```javascript
const tipoSuscripcion = "Basic";

if (tipoSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Tipo de suscripción no reconocido.");
}
```

**3️⃣ Bonus: Implementa la lógica anterior con un objeto (la forma más profesional):**

```javascript
const mensajesPorSuscripcion = {
    Free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

/**
 * Obtiene el mensaje de suscripción usando un objeto como mapa.
 * @param {string} tipo - El tipo de suscripción.
 * @returns {string} El mensaje correspondiente.
 */
function obtenerMensaje(tipo) {
    // Si el tipo existe como clave, devuelve el mensaje. Si no, devuelve un mensaje por defecto.
    return mensajesPorSuscripcion[tipo] || "Lo sentimos, ese tipo de suscripción no existe.";
}

const suscripcionActual = "Expert";
const mensajeFinal = obtenerMensaje(suscripcionActual);
console.log(mensajeFinal);
```

---

### Ciclos

**1️⃣ Responde las siguientes preguntas:**

*   **¿Qué es un ciclo?**

    Es una estructura que repite un bloque de código mientras una condición especificada se mantenga verdadera.

*   **¿Qué tipos de ciclos existen en JavaScript?**

    Los principales son `for`, `while`, y `do...while`. También existen `for...of` (para iterar sobre valores de iterables como arrays) y `for...in` (para iterar sobre las claves de un objeto).

*   **¿Qué es un ciclo infinito y por qué es un problema?**

    Ocurre cuando la condición de un ciclo nunca se vuelve falsa. Esto causa que el programa se bloquee, consumiendo el 100% de los recursos de la CPU asignados, y eventualmente puede hacer que el navegador o el entorno de ejecución colapse.

*   **¿Puedo mezclar ciclos y condicionales?**

    Sí, es una práctica extremadamente común. Se usan condicionales dentro de los ciclos para tomar decisiones en cada iteración.

**2️⃣ Replica los ciclos `for` usando `while`:**

*Ciclo 1:*
```javascript
// FOR
for (let i = 0; i < 5; i++) {
    console.log(`El valor de i es: ${i}`);
}

// WHILE (versión correcta)
let j = 0; // 1. Inicialización
while (j < 5) { // 2. Condición
    console.log(`El valor de j es: ${j}`);
    j++; // 3. Incremento
}
```

*Ciclo 2:*
```javascript
// FOR
for (let i = 10; i >= 2; i--) {
    console.log(`El valor de i es: ${i}`);
}

// WHILE (versión correcta)
let k = 10; // 1. Inicialización
while (k >= 2) { // 2. Condición
    console.log(`El valor de k es: ${k}`);
    k--; // 3. Decremento
}
```

---

### Listas (Arrays y Objetos)

**1️⃣ Responde las siguientes preguntas:**

*   **¿Qué es un array?**

    Es una estructura de datos ordenada, similar a una lista, que puede contener elementos de cualquier tipo. Se accede a sus elementos a través de un índice numérico (empezando en 0).
    `const miArray = [1, "hola", true];`

*   **¿Qué es un objeto?**

    Es una colección de pares clave-valor. Permite almacenar datos más complejos y estructurados, donde cada valor está asociado a un nombre de propiedad (la clave).
    `const miObjeto = { nombre: "Humberto", edad: 40 };`

*   **¿Cuándo es mejor usar objetos o arrays?**

    Usa **arrays** cuando el orden de los elementos es importante y cuando vas a realizar las mismas operaciones en la mayoría de ellos. Usa **objetos** cuando necesitas una estructura con etiquetas descriptivas (claves) para cada valor, y el orden no es la principal preocupación.

*   **¿Puedo mezclar arrays con objetos?**

    Sí, es muy común. Un array puede contener objetos, y un objeto puede tener arrays como valores de sus propiedades.

**2️⃣ Crea una función que imprima el primer elemento de cualquier array:**

```javascript
/**
 * Imprime el primer elemento de un array en la consola.
 * @param {Array<any>} arr - El array de entrada.
 */
function imprimirPrimerElemento(arr) {
    if (arr && arr.length > 0) {
        console.log(arr);
    } else {
        console.log("El array está vacío o no es válido.");
    }
}
```

**3️⃣ Crea una función que imprima todos los elementos de un array:**

```javascript
/**
 * Imprime cada elemento de un array, uno por línea.
 * @param {Array<any>} arr - El array de entrada.
 */
function imprimirElementosDeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

**4️⃣ Crea una función que imprima los valores de un objeto:**

```javascript
/**
 * Imprime cada valor de un objeto, uno por línea.
 * @param {object} obj - El objeto de entrada.
 */
function imprimirValoresDeObjeto(obj) {
    const valores = Object.values(obj);
    for (let i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
}

¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.
Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes. Y tú deberías de saberlo también.
¡Te espero en la siguiente clase para comenzar!