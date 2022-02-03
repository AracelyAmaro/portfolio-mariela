//inicializo el aos
  AOS.init();
  const boton_ = document.querySelector(".toggle");
  const nav_bar = document.querySelector(".nav-bar-menu");
  
  const arrow = document.getElementById('#arrow');
  const imagen_banner = document.getElementById('#img-ppal');
  
  boton_.addEventListener ('click', () => {
      nav_bar.classList.toggle('activado');
    
  })

  arrow.addEventListener('click', () => {
    // imagen_banner.innerHTML.
  })