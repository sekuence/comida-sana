document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const people = document.getElementById('people').value;
    const datetime = document.getElementById('datetime').value;
    const occasion = document.getElementById('occasion').value;

    alert(`Reserva realizada para ${name}.\nNúmero de personas: ${people}\nFecha y Hora: ${datetime}\nOcasion especial: ${occasion}`);
});
