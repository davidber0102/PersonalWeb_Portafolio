// ===============================
// MENÚ RESPONSIVE
// ===============================

// Controla la visibilidad del menú en dispositivos móviles
let menuVisible = false;

// Muestra u oculta el menú de navegación
function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  if (menuVisible) {
    nav.classList = "";
    menuVisible = false;
  } else {
    nav.classList = "responsive";
    menuVisible = true;
  }
}

// Oculta el menú después de seleccionar una opción
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Cierra el menú si se hace clic fuera de él (mejora de usabilidad)
document.addEventListener("click", function (e) {
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".nav-responsive");
  if (
    menuVisible &&
    nav &&
    !nav.contains(e.target) &&
    btn &&
    !btn.contains(e.target)
  ) {
    nav.classList = "";
    menuVisible = false;
  }
});

// ===============================
// ANIMACIÓN DE HABILIDADES
// ===============================

// Aplica animaciones a las barras de habilidades cuando la sección es visible
function efectoHabilidades() {
  const skills = document.getElementById("skills");
  if (!skills) return; // Previene errores si el elemento no existe

  const distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");
    // Se recomienda validar la cantidad de elementos antes de acceder por índice
    const clases = [
      "javascript",
      "htmlcss",
      "bbdd",
      "java",
      "spring",
      "sig",
      "postigis",
      "ofice",
      "adapta",
      "resprob",
      "trabeq",
      "autoapren",
      "comunacer",
      "dedica",
      "admin",
    ];
    for (let i = 0; i < habilidades.length && i < clases.length; i++) {
      habilidades[i].classList.add(clases[i]);
    }
  }
}

// Detecta el scroll para activar la animación de habilidades
window.addEventListener("scroll", efectoHabilidades);

// ===============================
// MODO OSCURO (opcional)
// ===============================

// Alterna la clase dark-mode en el body para cambiar el tema
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

// ===============================
// SCROLL SUAVE PARA ANCLAS
// ===============================

// Mejora la experiencia de navegación con scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// VALIDACIÓN BÁSICA DE FORMULARIO DE CONTACTO
// ===============================

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    // Validación simple de campos requeridos
    const nombre = form.querySelector("#nombre");
    const email = form.querySelector("#email");
    const mensaje = form.querySelector("#mensaje");
    if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
      alert("Por favor, completa todos los campos obligatorios.");
      e.preventDefault();
    }
  });
}

// Función para detectar cuando un elemento entra en pantalla
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
  );
}

// Añadir clase 'visible' a secciones cuando entran en viewport
function handleScrollAnimation() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Botón "Ir arriba" dinámico
const btnUp = document.createElement('button');
btnUp.innerHTML = '↑';
btnUp.id = 'btn-up';
document.body.appendChild(btnUp);

btnUp.style.position = 'fixed';
btnUp.style.bottom = '30px';
btnUp.style.right = '30px';
btnUp.style.padding = '10px 15px';
btnUp.style.fontSize = '1.5rem';
btnUp.style.border = 'none';
btnUp.style.borderRadius = '50%';
btnUp.style.backgroundColor = '#0057b7';
btnUp.style.color = '#fff';
btnUp.style.cursor = 'pointer';
btnUp.style.opacity = '0';
btnUp.style.transition = 'opacity 0.3s ease';
btnUp.style.zIndex = '1000';

// Mostrar/ocultar botón según scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnUp.style.opacity = '1';
  } else {
    btnUp.style.opacity = '0';
  }
});

// Scroll suave al hacer clic en botón
btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ejecutar animación en scroll
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
