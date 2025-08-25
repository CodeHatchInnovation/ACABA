// Seleccionamos el contenedor de información
const infoContainer = document.getElementById('infoContainer');

// Seleccionamos todas las opciones del menú
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(item => {
  const info = item.getAttribute('data-info');

  item.addEventListener('click', () => {
    changeInfo(item.textContent.trim(), info);
  });

  item.addEventListener('mouseover', () => {
    changeInfo(item.textContent.trim(), info);
  });

  item.addEventListener('mouseout', () => {
    resetInfo();
  });
});

// Función para cambiar el contenido con fade
function changeInfo(title, text) {
  infoContainer.classList.add('fade-out');
  setTimeout(() => {
    infoContainer.innerHTML = <h2>${title}</h2><p>${text}</p>;
    infoContainer.classList.remove('fade-out');
  }, 200);
}

// Función para restaurar mensaje inicial
function resetInfo() {
  infoContainer.classList.add('fade-out');
  setTimeout(() => {
    infoContainer.innerHTML = `<h2>Información Destacada</h2>
      <p>Pasa el mouse sobre las opciones o toca en móviles para ver la información aquí.</p>`;
    infoContainer.classList.remove('fade-out');
  }, 200);
}