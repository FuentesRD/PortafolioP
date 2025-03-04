document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("FormularioA");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        validarYregistrar(formulario)
    });
    
});

function validarYregistrar (formulario) {
    const campos = {
        nombre: document.getElementById('nombre'),
        mail: document.getElementById('mail'),
        helados: document.querySelectorAll('input[name="helado"]:checked'),
        genero: document.querySelector('input[name="genero"]:checked'),
        tiempo: document.getElementById('tiempo'),
        color: document.getElementById('color'),
        satisfaccion: document.getElementById('barra')
    
    };

    let error = '';
    if (!campos.nombre.value.trim()) error = 'Nombre vacío';
    else if (!campos.mail.value.trim()) error = 'Mail vacío';
    else if (campos.helados.length === 0) error = "Elige al menos un sabor";
    else if (!campos.genero) error = 'Seleccione un genero';
    else if (!campos.tiempo.value) error = 'Fecha / hora vacía';
    else if (!campos.color.value) error = 'Elige un color';

    if (error) {
        alert (error);
        return;
    }

    const fila = document.createElement('tr');
    fila.className = document.getElementById('informacionA').rows.length % 2 === 0 ? 'renglon1' : 'renglon2';

    fila.innerHTML = `
    <td>${campos.nombre.value.trim()}</td>
    <td>${campos.mail.value.trim()}</td>
    <td>${Array.from(campos.helados).map(h => h.value).join(', ')}</td>
    <td>${campos.genero.value}</td>
    <td>${campos.tiempo.value}</td>
    <td style="background-color: ${campos.color.value}"></td>
    <td>${campos.satisfaccion.value}</td>
    `;

    const tabla = document.getElementById('informacionA');
    if (tabla.rows.length === 0) {
        tabla.innerHTML = `<tr><th>Nombre</th><th>Mail</th><th>Sabores</th><th>Género</th><th>Hora</th><th>Color</th><th>Satisfacción</th></tr>`
    }
    tabla.appendChild(fila);

    formulario.reset();

}


//Primer intento de código. Presentaba algunas fallas pero en un punto mostraba la información, pero no los resultados de checkbox o radio.
// var registro = "<th>Nombre</th><th>Mail</th><th>Sabor</th><th>Genero</th><th>Hora</th><th>Color</th><th>Satisfacción</th>"
// var estilo = 0;

// function registrar () {
//     //Para la validación:
//     if (!document.getElementById("nombre").value) {
//         alert("Nombre vacío")
//         return;
//     } else if (!document.getElementById("mail").value) {
//         alert("Mail vacío")
//         return;
//     } else if (document.querySelectorAll('input[name="helado"]:checked').length === 0) {
//         alert("Favor de elegir al menos un sabor de helado")
//         return;
//     } else if (!document.querySelector('input[name="genero"]:checked')) {
//         alert("Favor de seleccionar un genero")
//         return;
//     } else if (!document.getElementById("tiempo").value) {
//         alert("Fecha y tiempo vacío")
//         return;
//     } else if (!document.getElementById("color").value) {
//         alert("seleccione un color")
//         return;
//     } else {
//         //Llenar registros
//         registro = registro + "<tr class =\"renglon1\">";
//         registro = registro + "<td>" + document.getElementById("nombre").value.trim() + "</td>";
//         registro = registro + "<td>" + document.getElementById("mail").value.trim() + "</td>";
//         let sabores = [];
//         registro = registro + "<td>" + document.querySelectorAll('input[name=helado]:checked').forEach(function(checkbox) {sabores.push(checkbox.value);}) + "</td>";
//         registro = registro + "<td>" + document.querySelector('input[name=genero]:checked').value + "</td>";
//         registro = registro + "<td>" + document.getElementById("tiempo").value + "</td>";
//         registro = registro + "<td>" + document.getElementById("color").value + "</td>";
//         registro = registro + "<td>" + document.getElementById("barra").value + "</td>";

//         document.getElementById("informacionA").innerHTML = registro;
//     }
// }