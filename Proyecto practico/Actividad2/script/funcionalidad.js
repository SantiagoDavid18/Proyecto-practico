// Función para comparar números
const compareNumbers = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("comparisonResult");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.textContent = "Por favor, ingresa ambos números.";
      return;
    }
  
    if (num1 > num2) {
      resultDiv.textContent = `El mayor es: ${num1}`;
    } else if (num1 < num2) {
      resultDiv.textContent = `El mayor es: ${num2}`;
    } else {
      resultDiv.textContent = "Ambos números son iguales.";
    }
  };
  
  // Función para mostrar el mes correspondiente
  const showMonth = () => {
    const monthNumber = parseInt(document.getElementById("monthNumber").value);
    let monthName;
  
    switch (monthNumber) {
      case 1: monthName = "Enero"; break;
      case 2: monthName = "Febrero"; break;
      case 3: monthName = "Marzo"; break;
      case 4: monthName = "Abril"; break;
      case 5: monthName = "Mayo"; break;
      case 6: monthName = "Junio"; break;
      case 7: monthName = "Julio"; break;
      case 8: monthName = "Agosto"; break;
      case 9: monthName = "Septiembre"; break;
      case 10: monthName = "Octubre"; break;
      case 11: monthName = "Noviembre"; break;
      case 12: monthName = "Diciembre"; break;
      default: monthName = "Número no válido. Por favor ingresa un número entre 1 y 12.";
    }
  
    alert(monthName);
  };
  
  // Función para gestionar nombres
  const namesArray = [];
  const addName = () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    const nameList = document.getElementById("nameList");
  
    if (nameInput) {
      namesArray.push(nameInput);
      document.getElementById("nameInput").value = ""; // Limpiar el campo
      nameList.innerHTML = `Lista de nombres: <br>${namesArray.join("<br>")}`;
    } else {
      alert("Por favor, ingresa un nombre.");
    }
  };
  