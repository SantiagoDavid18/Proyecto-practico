  // Función para cargar los datos almacenados en localStorage
const loadUserData = () => {
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const tableBody = document.getElementById("userTableBody");
  
    // Limpiar el contenido actual de la tabla
    tableBody.innerHTML = "";
  
    // Verificar si hay usuarios registrados
    if (users.length === 0) {
      const noDataRow = `<tr><td colspan="5">No hay datos registrados.</td></tr>`;
      tableBody.innerHTML = noDataRow;
      return;
    }
  
    // Agregar cada usuario como una fila en la tabla
    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.userId}</td>
          <td>${user.cedula}</td>
          <td>${user.nombresCompletos}</td>
          <td>${user.cumpleaños}</td>
          <td>${user.ciudad}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  };
  
  // Llamar a la función al cargar la página
  window.onload = loadUserData;
  