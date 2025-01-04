// Selección de elementos del DOM
const form = document.getElementById('nota-form');
const listaNotas = document.getElementById('lista-notas');

// Manejo del formulario para agregar notas
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el recargo de la página

  // Captura el valor del input
  const notaInput = document.getElementById('nota');
  const notaTexto = notaInput.value;

  // Crea un nuevo elemento de lista
  const nuevaNota = document.createElement('li');
  nuevaNota.textContent = notaTexto;

  // Agrega la nota a la lista
  listaNotas.appendChild(nuevaNota);

  // Limpia el campo de entrada
  notaInput.value = '';
});
