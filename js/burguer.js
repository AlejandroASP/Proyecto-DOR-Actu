(() => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("overlay");
  let closed = true;

  const change = () => {
    if (closed) {
      hamburger.classList.add("open");
      menu.classList.add("menu");
    } else {
      hamburger.classList.remove("open");
      menu.classList.remove("menu");
    }
    closed = !closed;
  };

  hamburger.addEventListener("click", change);
})();

$(document).ready(function(){
  $('#cart').click(function(){
      $('#cart-content').toggle(); // Esto mostrará u ocultará el contenido del carrito
  });

  // Detiene la propagación del evento de clic cuando se hace clic en el menú desplegable
  $('#quantity').click(function(event){
      event.stopPropagation();
  });
});