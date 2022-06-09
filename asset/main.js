let carrito = [];

//creación de la clase 
// (la clase  va con Mayúscula)

class ProductoCarrito{

    constructor (nombre, precio, imagen, cantidad, id, subtotal){
        this.nombre = nombre ;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = 1;
        this.id = id;
        this.subtotal = precio;
        
    }
}

let divContainer = document.getElementById ("row")

function rellenarPagina (arrayProductos){
    
    for (let producto of arrayProductos){

        let div = document.createElement ("div")
        div.classList = "col-4 mt-3"
        div.innerHTML =
         `
        <div class="card" style="width:10 rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
            <div class="card-body">
                <h5 class="card-tittle">${producto.nombre}</h5>
                <p class="card-text">$<strong>${producto.precio}</strong></p>
                <button class="btn btn-primary anadirCarrito">Añadir al carrito</button>
            </div>
        </div>
        `

        divContainer.appendChild(div);
    }

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    if (carritoLocalStorage){
        carritoNav(carritoLocalStorage)
    }
}



rellenarPagina(productos);

// funcionamiento del botón

let botones = document.querySelectorAll(".anadirCarrito");

    // representa cada botón
    botones.forEach (elemento => {
       elemento.addEventListener ("click", anadirCarrito)
    });

  function anadirCarrito(e) {

    let carritoLocalStorage = JSON.parse(localStorage.getItem(carrito));
    
    if (carritoLocalStorage){
        carrito = carritoLocalStorage;
    }
        
    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt); 
    
    // _______________________________________________________
    // obtener nombre del producto
    let nombre = e.target.parentNode.children[0].innerText;
    // obtener precio del producto
    let precio = e.target.parentNode.children[1].children[0].innerText;
    // obtener imagen del producto
    let imagen = e.target.parentNode.parentNode.children[0].src;
    // obtener el ID
    let id = e.target.parentNode.parentNode.children[0].alt;

    // creación del objeto (tiene que ser iguales al nombre de la variables) 
 
    if (index == -1){
        const producto = new ProductoCarrito (nombre, precio, imagen, id);
        carrito.push(producto);
    // Si no lo encontras, entonces hacelo ↑
    }
    else{
        // suma la cantidad del producto ↓
        carrito[index].cantidad++;
        // para saber el subtotal ↓
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }
    //   implementación de localStorage: cuando se pushee se guarde el carrito, utilizo "setItem" para generar un nuevo item
    // implementación de JSON
    localStorage.setItem("carrito", JSON.stringify(carrito))
    // carritoNav (carrito); quiero hacer conteo del carrito 
    carritoNav(carrito);
}   

function carritoNav (arrayCarrito) {

    let textoCarrito = document.getElementById ("carrito00")

    let totalProductos = 0;

    for(let producto of arrayCarrito){
    totalProductos += producto.cantidad;

    textoCarrito.innerHTML = "";
    textoCarrito.innerHTML = `<p>carrito (${totalPeoductos})</p>`
    }
}
// CONTEO DE CARRITO A TERMINAR ↑