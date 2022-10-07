export class Inventario {
    constructor() {
        this.listaProductos = [];
    }
    addProducto(producto) {
        this.listaProductos.push(producto);
    }

    ordenarLista() {
        for (let i = 0; i < this.listaProductos.length; i++) {
            for (let j = 0; j < this.listaProductos.length; j++) {
                if (Number(this.listaProductos[i].codigo) < Number(this.listaProductos[j].codigo)) {
                    let aux = this.listaProductos[i];
                    this.listaProductos[i] = this.listaProductos[j];
                    this.listaProductos[j] = aux;
                }
            }
        }
    }

    devolverLista() {
        return this.listaProductos;
    }

    eliminarProducto(codigo) {
        let producto = false;
        for (let i = 0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i].codigo;
            if (Number(aux) === Number(codigo)) {
                producto = this.listaProductos[i];
                let aux = this.listaProductos[i];
                for (let j = i; j < this.listaProductos.length - 1; j++) {
                    this.listaProductos[j] = this.listaProductos[j + 1];
                }
                this.listaProductos[this.listaProductos.length - 1] = aux;
                this.listaProductos.pop();
            }
        }
        return producto;

    }

    //busqueda binaria
    buscarProducto(codigo) {
        let producto = false;
        let inicio = 0;
        let fin = this.listaProductos.length - 1;
        let mitad = Math.floor((inicio + fin) / 2);
        while (inicio <= fin) {
            if (Number(this.listaProductos[mitad].codigo) === Number(codigo)) {
                producto = this.listaProductos[mitad];
                break;
            } else if (Number(this.listaProductos[mitad].codigo) < Number(codigo)) {
                inicio = mitad + 1;
            } else {
                fin = mitad - 1;
            }
            mitad = Math.floor((inicio + fin) / 2);
        }
        return producto;
    }

   /* buscarProducto(codigo) {
        let producto=false;
        for (let i = 0; i < this.listaProductos.length; i++) {
            let aux = this.listaProductos[i].codigo;
            if (Number(aux) === Number(codigo)) {
                producto = this.listaProductos[i];
            }
        }
        return producto;
    }*/

}