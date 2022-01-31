//inicializo el aos
  AOS.init();
  const boton_ = document.querySelector(".toggle");
  const nav_bar = document.querySelector(".nav-bar-menu");
 
  boton_.addEventListener ('click', () => {
      nav_bar.classList.toggle('activado');
    
  })