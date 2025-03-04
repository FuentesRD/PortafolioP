function recibirInformacion(event) {
    event.preventDefault();

    const datos = {
        nombre: document.getElementById('nombre').value,
        mail: document.getElementById('mail').value,
        edad: document.getElementById('edad').value,
        genero: document.querySelector('input[name="genero"]:checked').value,
        fecha: document.getElementById('nacimiento').value,
        color: document.getElementById('color').value
    };

    const datosi = `Datos ingresados: <br>
    Nombre: ${datos.nombre} <br>
    Mail: ${datos.mail} <br>
    Edad: ${datos.edad} <br>
    Genero: ${datos.genero} <br>
    Fecha de nacimiento: ${datos.fecha} <br>
    Color favorito: ${datos.color}`; 

    document.getElementById('resultado').innerHTML = datosi;
}