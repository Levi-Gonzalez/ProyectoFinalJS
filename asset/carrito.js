const carrito = JSON.parse(localStorage.getItem("carrito"));
//( Al ser un ID se utiliza "#")
let body = document.querySelector("#tbody");

function rellenarCarrito (arrayCarrito){

    for (let producto of arrayCarrito){

        let row = document.createElement ("tr");

        row.innerHTML = `<td>${producto.nombre}</td>
                         <td>$${producto.precio}</td>
                         <td>${producto.cantidad}</td>
                         <td>$${producto.subtotal}</td>
                         <th><button id="${producto.id}" class="btn btn-danger eliminarProducto">Eliminar</button></th>

                        `
                        
        tbody.appendChild(row)

    }
    
}
rellenarCarrito(carrito);

// Boton eliminar
let botonesEliminar = document.querySelectorAll(".eliminarProducto");

 botonesEliminar.forEach (elemento => {
    elemento.addEventListener ("click", eliminarProducto)
 })

//  funcion para poder eliminar cada producto.
function eliminarProducto (e){

    let index = carrito.findIndex( producto => producto.id == e.target.id); 

    carrito.splice (index, 1);

    e.target.parentNode.parentNode.remove();

    localStorage.setItem("carrito", JSON.stringify(carrito));

}

