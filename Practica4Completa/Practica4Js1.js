function convertirCalificacion(event) {
    event.preventDefault();
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    const resultado = document.getElementById('resultado');


    if (calificacion < 0 || calificacion > 10) {
        resultado.textContent = "Calificación no valida, favor de ingresar un valor del 0 al 10";
        return;
    }

    let califl;
    if (calificacion >= 0 && calificacion < 6) califl = "NA";
    else if (calificacion >= 6 && calificacion < 7.5) califl = "S";
    else if (calificacion >= 7.5 && calificacion < 9) califl = "B";
    else if (calificacion >= 9 && calificacion < 10) califl = "MB";
    else califl = "LAP";

    resultado.textContent = `Calificacion letra: ${califl}`; 
}