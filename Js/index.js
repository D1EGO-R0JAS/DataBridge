/* INTERACCION DEL MENU HAMBURGESA */
const hamburgerMenu = document.querySelector('.hamburger input'); 
const optionHamburgerMenu = document.querySelector('.nav-buttons-container'); 

hamburgerMenu.addEventListener('click', () => {
    optionHamburgerMenu.classList.toggle('inactive');
    console.log(optionHamburgerMenu.classList);
});
/** FIN DEL MENU HAMBURGUESA */

/** INICIO DEL SLIDER DE SERVICIOS */

let sliderInterval;
let isTransitioning = false; // Evita interrupciones durante la animación
let isMovingForward = true; // Indica si el auto-scroll va hacia adelante

function scrollSlideContainer(offset, isAuto = false) {
    if (isTransitioning) return;
    isTransitioning = true;

    const container = document.querySelector('.slideContainer');
    const totalWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;

    container.scrollBy({
        left: offset,
        behavior: 'smooth'
    });

    setTimeout(() => {
        if (container.scrollLeft + visibleWidth >= totalWidth) {
            if (isAuto) {
                isMovingForward = false; // Cambia dirección al llegar al final
            } else {
                container.scrollTo({ left: 0, behavior: 'instant' }); // Botón manual: Salta al inicio
            }
        } else if (container.scrollLeft <= 0) {
            if (isAuto) {
                isMovingForward = true; // Cambia dirección al llegar al inicio
            } else {
                container.scrollTo({ left: totalWidth - visibleWidth, behavior: 'instant' }); // Botón manual: Salta al final
            }
        }

        isTransitioning = false;
    }, 600);
}

function nextSlide() {
    clearInterval(sliderInterval);
    scrollSlideContainer(320);
    interval();
}

function prevSlide() {
    clearInterval(sliderInterval);
    scrollSlideContainer(-320);
    interval();
}

function autoScroll() {
    scrollSlideContainer(isMovingForward ? 320 : -320, true);
}

function interval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(autoScroll, 5000);
}

// 🛠️ CORRIGE PROBLEMAS EN RESPONSIVE
window.addEventListener('resize', () => {
    const container = document.querySelector('.slideContainer');
    setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'instant' });
    }, 300);
});

interval(); // Inicia el auto-scroll

/** Chart */

// Configuración del gráfico
const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Rendimiento Predictivo',
            data: [92, 93, 95, 94, 96, 95],
            borderColor: '#64FFDA',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(100, 255, 218, 0.1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 90,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#8892B0'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#8892B0'
                }
            }
        }
    }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturar la fecha y hora actual en formato YYYY-MM-DD HH:MM:SS
    var fecha = new Date();
    var fechaHora = fecha.toISOString().slice(0, 19).replace("T", " "); 
    document.getElementById("fechaHora").value = fechaHora; // Asignar al campo oculto

    var formData = new FormData(this);
    
    fetch("https://script.google.com/macros/s/AKfycbzXuakxgUpOmvBZR5h05E4T1UsyizIypU8zUPDQT4xaKUKiNQKG9UTtN1qu25m8GM4K/exec", { 
        method: "POST",
        body: formData
    }).then(response => response.text())
      .then(data => {
        Swal.fire({
            title: 'Gracias por contactarnos',
            text: 'Datos Enviados Correctamente',
            icon: 'success'
          });
        document.getElementById("contactForm").reset();
      })
      .catch(error => Swal.fire({
        title: 'Algo Sucedio',
        text: 'Los datos NO se enviaron, intentalo de nuevo',
        icon: 'error'
      }));
});

      