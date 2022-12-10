const main = document.querySelector(".main");

const principal = document.querySelector(".principal");

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








