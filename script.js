const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResultado = document.querySelector('#resultado')

btn.addEventListener('click', btnOnClick);

// La función btnOnClick, con validación
function btnOnClick() {
    // Obtenemos los valores numéricos
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    // Verificamos si los inputs estaban vacíos o no eran números
    if (isNaN(num1) || isNaN(num2)) {
        pResultado.innerText = "Error: Por favor, introduce solo números en ambos campos.";
        return; // Detenemos la ejecución de la función aquí
    }

    // Si todo está bien, realizamos la suma
    const sumaInputs = num1 + num2;
    pResultado.innerText = "Resultado: " + sumaInputs;
}