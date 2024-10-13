
function multiplicar() {
    const numero1 = Number(document.querySelector("#input1").value);
    const numero2 = Number(document.querySelector("#input2").value);
    const numero3 = Number(document.querySelector("#input3").value);

    const paragrafo = document.querySelector("#resultado");
    paragrafo.innerHTML = `Resultado: ${numero1 * numero2 * numero3}`;
}

const button = document.querySelector("#calcularbtn");
button.addEventListener('click', multiplicar);
