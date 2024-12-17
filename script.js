// Lista de imágenes disponibles en la carpeta "imagenes"
const images = [
    "images/img1.png",
    "images/img1.png",
    "images/img1.png",
    "images/img1.png",
    "images/img1.png",
    "images/img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/05img1.png",
    "images/10img1.png",
    "images/10img1.png",
    "images/10img1.png",
    "images/10img1.png",
    "images/10img1.png",
    "images/15img1.png",
    "images/15img1.png",
    "images/15img1.png",
    "images/20img1.png",
    "images/20img1.png",
    "images/50img1.png"
  ];
  
  // Selecciona el botón y la imagen
  const button = document.getElementById("change-image-btn");
  const image = document.getElementById("random-image");
  
  // Función para mostrar una imagen aleatoria
  function changeImage() {
    // Aplica la clase de animación para desaparecer
    image.classList.add("fade-out");
  
    // Espera la duración de la animación (1 segundo) antes de cambiar la imagen
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length); // Índice aleatorio
      image.src = images[randomIndex]; // Cambia la imagen
      image.classList.remove("fade-out"); // Quita la clase para reaparecer
    }, 1000); // 1000 milisegundos = 1 segundo
  }
  
  // Agrega un evento al botón
  button.addEventListener("click", changeImage);

  function actualizarHoraBogota() {
    // Crear un objeto de fecha ajustado a la zona horaria de Bogotá (GMT-5)
    const fecha = new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota", // Zona horaria de Bogotá
      weekday: "long",            // Día de la semana
      year: "numeric",            // Año
      month: "long",              // Mes completo
      day: "numeric",             // Día del mes
//      hour: "2-digit",            // Hora con formato de 2 dígitos
//      minute: "2-digit",          // Minutos con formato de 2 dígitos
//      second: "2-digit",          // Segundos con formato de 2 dígitos
    });
  
    // Mostrar la fecha y hora en el contenedor
    document.getElementById("time").textContent = fecha;
  }
  
  // Actualizar la hora cada segundo
  setInterval(actualizarHoraBogota, 1000);
  
  // Llamar a la función inmediatamente al cargar la página
  actualizarHoraBogota();

  // Vence
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha actual en Bogotá (zona horaria -5:00)
    const options = {
      timeZone: "America/Bogota", // Zona horaria de Bogotá
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
//      hour: "2-digit",
//      minute: "2-digit",
//      second: "2-digit",
    };
  
    // Crear un objeto Date para la fecha actual
    const fechaActual = new Date();
  
    // Sumamos 7 días a la fecha actual
    fechaActual.setDate(fechaActual.getDate() + 7);
  
    // Formatear la fecha con la zona horaria de Bogotá
    const fechaFutura = new Intl.DateTimeFormat("es-CO", options).format(fechaActual);
  
    // Mostrar la fecha en el elemento HTML
    document.getElementById("fecha").innerText = `Vence: ${fechaFutura}`;
  });
  
  // Obtén el botón con el id 'printBtn'
const printButton = document.getElementById('printBtn');

// Agrega un evento de clic al botón
printButton.addEventListener('click', function() {
    window.print(); // Esta función abre el cuadro de diálogo de impresión
});
