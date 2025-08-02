let usuarios = [];

function agregar() {
  const nombre = document.getElementById("nombre").value;
  if (nombre.trim() === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  usuarios.push(nombre);
  document.getElementById("nombre").value = "";
  mostrar();
}

function mostrar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  usuarios.forEach((nombre, index) => {
    lista.innerHTML += `<li>${nombre} <button onclick="eliminar(${index})">Eliminar</button></li>`;
  });

  // Actualiza contador de usuarios
  const total = document.getElementById("total");
  if (total) {
    total.textContent = `Total de usuarios: ${usuarios.length}`;
  }

  // Actualiza fecha
  const fecha = document.getElementById("fecha");
  if (fecha) {
    fecha.textContent = `Fecha: ${new Date().toLocaleDateString()}`;
  }
}

function eliminar(index) {
  usuarios.splice(index, 1);
  mostrar();
}

function pagar() {
  alert("Pago simulado con éxito.");
}
