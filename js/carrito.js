const carritoCompras = document.querySelector('.carrito');

const infoCarrito = document.querySelector('.infoCarrito');

infoCarrito.classList.toggle('hide')

carritoCompras.addEventListener("click", ()=>{
    infoCarrito.classList.toggle('hide')
    console.log("you")
})