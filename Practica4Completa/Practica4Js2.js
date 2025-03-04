function calcularFactorial (event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('facto').value);
    const resultado = document.getElementById('resultado');

    function factorialRec(num) {
        if (num < 0) return NaN;
        if (num === 0) return 1;
        return num * factorialRec(num - 1);
    }

    const calculofact = factorialRec(n);

    if (isNaN(calculofact)) {
        resultado.textContent = "Favor de no ingresar números negativos, no esta definido";
    } else {
        resultado.textContent = `Resultado: ${calculofact}`;
    }
}