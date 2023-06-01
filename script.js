const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const resultado = parseFloat(input1.value) + parseFloat(input2.value);
    result.innerText = "Resultado: " + resultado;
}