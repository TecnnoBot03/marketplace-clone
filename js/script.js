const main = document.querySelector(".main");

const principal = document.querySelector(".principal");

for (i=0; i<herramientasVender.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class="objeto">
        <p class="nombre">${herramientasVender[i].nombre}</p>
        <p class="precio">${herramientasVender[i].precio}</p>
        <p class="categoria">${herramientasVender[i].categoria}</p>
        <button data-id="${i}" class="boton">Agregar al carrito</button>
    </div>
    `;
    principal.append(newDiv);
}

principal.addEventListener('click', e => {
    agregarCarrito(e);
})

const agregarCarrito = e => {
    if (e.target.classList.contains('boton')) {
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();
}

const setCarrito = elementoDelCarrito => {
    console.log(elementoDelCarrito);
    const producto = {
        id: elementoDelCarrito.querySelector('.boton').dataset.id,
        nombre: elementoDelCarrito.querySelector('.nombre').textContent,
        precio: elementoDelCarrito.querySelector('.precio').textContent,
        cantidad: 1
    }

    carritoDeCompras.push(producto);
    

    console.log(producto);
}
