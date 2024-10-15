const contenedor_cards = document.getElementById("contenedor_cards");

const inputBusqueda = document.getElementById('buscar');

let matematicosFiltradas = [];

fetch("matematicos.json")
    .then(res => res.json())
    .then(matematicos => {
        console.log(matematicos);
        crearTarjetas(matematicos);

        matematicosFiltradas = matematicos;
    });


let templateCard = "";

function crearTarjetas(matematicos) {
    templateCard = "";

    for (const x of matematicos) {
        templateCard += `
        <div class="card">
            <img src="${x.imagen}" alt="${x.nombre} ${x.id}">
            <p>${x.nombre}</p>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}


inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;

    crearTarjetasInput();

    if (matematicosFiltradasInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    }

    console.log(matematicosFiltradasInput);
    
    let labelBuscar = document.getElementById("labelBuscar");
    labelBuscar.innerHTML = inputValue;
    console.log(inputValue);
});

function crearTarjetasInput() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    
    matematicosFiltradasInput = matematicosFiltradas.filter(x => x.nombre.toLowerCase().includes(textoBusqueda));

    templateCard = "";

    for (const x of matematicosFiltradasInput) {
        templateCard += `
        <div class="card">
            <img src="${x.imagen}" alt="${x.nombre} ${x.id}">
            <p>${x.nombre}</p>
        </div>`;
    }
    
    contenedor_cards.innerHTML = templateCard;
}