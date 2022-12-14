const carritoCompras = document.querySelector('.carrito');

const infoCarrito = document.querySelector('.infoCarrito');

infoCarrito.classList.toggle('hide')

carritoCompras.addEventListener("click", ()=>{
    infoCarrito.classList.toggle('hide')
    for (i=0; i<carritoDeCompras.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="objeto">
            <p class="nombre">${carritoDeCompras[i].nombre + " "}</p>
            <p>$</p>
            <p class="precio">${carritoDeCompras[i].precio}</p>
        </div>
        `;
        infoCarrito.append(newDiv);
    }
})