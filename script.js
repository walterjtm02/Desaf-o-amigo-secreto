// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombreAmigoInput = document.getElementById('amigo');
    let nombreAmigo = nombreAmigoInput.value.trim();

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado. Por favor, inserte un nombre diferente.");
        nombreAmigoInput.value = ""; // Limpia el campo de entrada
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Actualizar la lista visible en la página
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    nombreAmigoInput.value = "";
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya suficientes amigos para el sorteo
    if (amigos.length < 2) {
        alert("Agrega al menos 2 amigos para poder realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

// Función para reiniciar el juego
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}

