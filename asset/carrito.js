const carrito = JSON.parse(localStorage.getItem("carrito"));
//( Al ser un ID se utiliza "#")
let body = document.querySelector("#tbody");

function rellenarCarrito (arrayCarrito){

    for (let producto of arrayCarrito){

        let row = document.createElement ("tr");

        row.innerHTML = `<td>${producto.nombre}</td>
                         <td>$${producto.precio}</td>
                         <td>${producto.cantidad}</td>
                         <td>${producto.cantidad}</td>
                         <td>$${producto.subtotal}</td>
                         <td>Eliminar</td>
                         <td>${producto.id}</td>;`
        
        tbody.appendChild(row)

    }
    
}
rellenarCarrito(carrito);