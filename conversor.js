const valores = {
    temperatura: ['Celsius', 'Fahrenheit', 'Kelvin'],
    distancia: ['Kilómetros', 'Metros', 'Millas', 'Pulgadas', 'Pies'],
    tiempo: ['Años', 'Días', 'Horas', 'Segundos'],
    moneda: ['MXN', 'USD', 'Euro']
}

function actunidades() {
    const categoria = document.getElementById('categoria').value;
    const opciones = valores[categoria].map(u => `<option>${u}</option>`);
    document.getElementById('origen').innerHTML = opciones.join('');
    document.getElementById('destino').innerHTML = opciones.join('');
}

actunidades();
document.getElementById('categoria').onchange = actunidades;

const convMoneda = {
    MXN: {USD: 0.048, Euro: 0.046},
    USD: {MXN: 20.70, Euro: 0.94},
    Euro: {MXN: 21.97, USD: 1.06}
}

function convertir() {
    const valor = parseFloat(document.getElementById('entrada').value);
    const categoria = document.getElementById('categoria').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    let resultado;

    if (categoria === 'temperatura') {
        const conversiones = {
            'Celsius-Fahrenheit': c => (c * 9/5) + 32,
            'Celsius-Kelvin': c => c + 273.15,
            'Fahrenheit-Celsius': f => (f - 32) * 5/9,
            'Fahrenheit-Kelvin': f => (f - 32) * 5/9 + 237.15,
            'Kelvin-Celsius': k => k - 273.15,
            'Kelvin-Fahrenheit': k => (k - 273.15) * 9/5 + 32
        };
        resultado = conversiones[`${origen}-${destino}`](valor);
    } else if (categoria === 'moneda') {
        resultado = origen === destino ? valor: valor * convMoneda[origen][destino];
    } else {
        const tpydt = {
            tiempo: {
                Segundos: 1,
                horas: 3600,
                Dias: 86400,
                Años: 31536000
            },
            distancia: {
                Metros: 1,
                Kilometros: 1000,
                Millas: 1609.34,
                pulgadas: 0.0254,
                pies: 0.3048
            }
        };

        const uni = valor * tpydt[categoria][origen];
        resultado = uni / tpydt[categoria][destino];
    }
    document.getElementById('resultado').textContent = `${valor} ${origen} = ${resultado.toFixed(2)} ${destino}`;
}