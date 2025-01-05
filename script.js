// Referencias a elementos del DOM
const notaForm = document.getElementById('nota-form');
const notaInput = document.getElementById('nota');
const listaNotas = document.getElementById('lista-notas');

// Recuperar notas almacenadas en localStorage
let notas = JSON.parse(localStorage.getItem('notas')) || [];

// Función para guardar las notas en localStorage
function guardarNotas() {
  localStorage.setItem('notas', JSON.stringify(notas));
}

// Función para renderizar la lista de notas
function renderizarNotas() {
  // Limpiar la lista antes de renderizar
  listaNotas.innerHTML = '<h1>Lista de Notas</h1>';
  
  // Crear un elemento para cada nota
  notas.forEach((nota, index) => {
    const li = document.createElement('li');
    li.textContent = nota;
    li.className = 'nota-item';

    // Crear botón de eliminar
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'X';
    eliminarBtn.className = 'eliminar-btn';
    eliminarBtn.onclick = () => eliminarNota(index);

    // Agregar texto y botón al <li>
    li.appendChild(eliminarBtn);

    // Agregar <li> a la lista de notas
    listaNotas.appendChild(li);
  });
}

// Función para agregar una nueva nota
function agregarNota(event) {
  event.preventDefault(); // Evitar el comportamiento por defecto del formulario

  const nuevaNota = notaInput.value.trim(); // Obtener y limpiar la entrada del usuario

  if (nuevaNota) {
    notas.push(nuevaNota); // Agregar la nota al arreglo
    guardarNotas(); // Guardar en localStorage
    renderizarNotas(); // Renderizar la lista actualizada
    notaInput.value = ''; // Limpiar el campo de entrada
  }
}

// Función para eliminar una nota
function eliminarNota(index) {
  notas.splice(index, 1); // Eliminar la nota del arreglo
  guardarNotas(); // Actualizar localStorage
  renderizarNotas(); // Renderizar la lista actualizada
}

// Escuchar el evento de envío del formulario
notaForm.addEventListener('submit', agregarNota);

// Renderizar las notas almacenadas al cargar la página
renderizarNotas();

