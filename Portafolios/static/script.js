document.addEventListener('DOMContentLoaded', function () {
    const animatedName = document.getElementById('animated-name');
    const nameText = 'Martha T. Acosta Ozorio';
    let index = 0;

    function animateName() {
        if (index < nameText.length) {
            animatedName.innerHTML += nameText.charAt(index);
            index++;
            setTimeout(animateName, 100);
        }
    }

    animateName();
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById('about');

    // Agrega la clase 'active' inmediatamente después de cargar la página
    aboutSection.classList.add('active');

    // Agrega un evento de clic al enlace para futuros clics
    document.getElementById('about-link').addEventListener('click', function (event) {
        event.preventDefault();

        // No es necesario añadir la clase 'active' nuevamente, ya que ya se agregó al cargar la página
    });

    // Agrega un evento de clic al botón del menú para dispositivos móviles (Bootstrap 5)
    const navbarNav = document.getElementById('navbarNav');
    aboutLink.addEventListener('click', function () {
        toggleAboutSection();
        // Cierra el menú para dispositivos móviles después de hacer clic en el enlace
        if (window.innerWidth < 992) { // Ajusta según sea necesario
            const navbarToggle = document.querySelector('.navbar-toggler');
            navbarToggle.click();
        }
    });
});

      // Función para animar las barras de progreso
      function animateProgressBars() {
        $('.progress-bar').each(function () {
            var progressBar = $(this);
            var width = progressBar.attr('aria-valuenow');
            progressBar.css('width', '0%');
            progressBar.animate({
                width: width + '%'
            }, 1000); 
        });
    }

    // Llama a la función de animación cuando se carga el documento
    $(document).ready(function () {
        animateProgressBars();
    });

    window.onload = function() {
        var texto = document.getElementById("descrip");
        texto.style.display = "block"; // Opcional: cambia "block" por "inline" o "inline-block" según sea necesario
        texto.classList.remove("hidden");
    }


    

