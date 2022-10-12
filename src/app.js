import { Producto } from './producto.js';
import { Inventario } from './inventario.js';

// eventos
const inventario = new Inventario();


function mostrarProductos() {
    document.getElementById("product-list").innerHTML = "";
    let lista = inventario.devolverLista();

    let temp = lista;
    while (temp != null) {
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${temp.codigo}
                <strong>Nombre</strong>: ${temp.nombre}
                <strong>Precio</strong>: ${temp.precio}
                <strong>Cantidad</strong>: ${temp.cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
        temp = temp.next;
    }
    

}

function listarInvertido() {
    
}

function buscarUnProducto(codigo) {
    let buscar = inventario.buscarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (buscar === false) {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto no encontrado</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Codigo</strong>: ${buscar.codigo}
                <strong>Nombre</strong>: ${buscar.nombre}
                <strong>Precio</strong>: ${buscar.precio}
                <strong>Cantidad</strong>: ${buscar.cantidad}
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}

function eliminarProducto(codigo) {
    let eliminar = inventario.eliminarProducto(codigo);
    document.getElementById("product-list").innerHTML = "";
    const listaProducto = document.getElementById('product-list');
    const element = document.createElement('div');
    if (eliminar === false) {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto no Encontrado</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    } else {
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto Eliminado</strong>
            </div>
        </div>
        `;
        listaProducto.appendChild(element);
    }
}


document.getElementById('producto-form')
    .addEventListener('submit', function (e) {
        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;

        const producto = new Producto(codigo, nombre, precio, cantidad);
        
        const listaProducto = document.getElementById('product-list');
        const element = document.createElement('div');

       // if (inventario.buscarProducto(codigo) === false) {
            inventario.agregarProducto(producto);
            mostrarProductos();
        /*} else {
            element.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>El Producto Ya Existe</strong>
                    </div>
                </div>
                `;
            listaProducto.appendChild(element)
        }*/

        e.preventDefault();
    });

document.getElementById('producto-Eliminar')
    .addEventListener('submit', function (e) {
        const codigoEliminar = document.getElementById('codigoEliminar').value;

        eliminarProducto(codigoEliminar);

        e.preventDefault();
    });

document.getElementById('producto-Buscar')
    .addEventListener('submit', function (e) {
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        buscarUnProducto(codigoBuscar);
        e.preventDefault();
    });

document.getElementById('producto-Mostrar')
    .addEventListener('submit', function (e) {
        mostrarProductos();
        e.preventDefault();
    });

document.getElementById('producto-invertir')
    .addEventListener('submit', function (e) {
        listarInvertido();
        e.preventDefault();
    });
