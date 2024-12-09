  // Función para registrar un usuario y redirigir a la página de datos
const registerUser = () => {
    // Capturar los valores del formulario
    const userId = document.getElementById("userId").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const nombresCompletos = document.getElementById("nombresCompletos").value.trim();
    const cumpleaños = document.getElementById("cumpleaños").value.trim();
    const ciudad = document.getElementById("ciudad").value;
  
    // Validar que todos los campos estén llenos
    if (!userId || !cedula || !nombresCompletos || !cumpleaños || !ciudad) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Obtener los registros actuales del localStorage o inicializar un array vacío
    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  
    // Crear un nuevo usuario
    const newUser = {
      userId,
      cedula,
      nombresCompletos,
      cumpleaños,
      ciudad
    };
  
    // Agregar el nuevo usuario al array de usuarios
    users.push(newUser);
  
    // Guardar los usuarios actualizados en localStorage
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  
    // Redirigir a la página de datos
    window.location.href = "datos.html";
  };
  