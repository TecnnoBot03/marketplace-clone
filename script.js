let herramientasVender = [
    sierra = {
        nombre: "Sierra de mesa",
        precio: 600,
        categoria: "sierras",
        imagen: "asfsfbreb"
    },
    pulidora = {
        nombre: "Pulidora de bateria",
        precio: 150,
        categoria: "pulidoras",
        imagen: "asfsfbreb"
    },
    martilloNeumatico = {
        nombre: "Martillo Neumatico",
        precio: 400,
        categoria: "martillos",
        iamgen: "asfsfbreb"
    }
];

const main = document.querySelector(".main");

const principal = document.querySelector(".principal");

const carritoCompras = document.querySelector('.carrito');

const infoCarrito = document.querySelector('.infoCarrito');

for (i=0; i<herramientasVender.length; i++) {
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    newP.innerText = herramientasVender[i].nombre;
    let newP2 = document.createElement('p');
    newP2.innerText = herramientasVender[i].precio;
    let newP3 = document.createElement('p');
    newP3.innerText = herramientasVender[i].categoria;
    let button = document.createElement('button')
    button.innerText = 'Agregar al carrito';
    newDiv.append(newP, newP2, newP3, button);
    principal.append(newDiv);
    newDiv.classList = "objeto";
    button.classList = 'boton'
    button.id = i;
}

infoCarrito.classList.toggle('hide')

carritoCompras.addEventListener("click", ()=>{
    infoCarrito.classList.toggle('hide')
    console.log("you")
})







