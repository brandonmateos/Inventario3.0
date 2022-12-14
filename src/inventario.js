export class Inventario {
    constructor() {
        this.lista = null;
    }
    agregarProducto(producto) {
        if (this.lista == null) {
            this.lista = producto;
        } else {
            let temp = this.lista;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = producto;
        }
    }

    devolverLista() {
        return this.lista;
    }

    eliminarProducto(codigo) {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            let temp = this.lista;
            if (temp.codigo == codigo) {
                this.lista = temp.next;
            } else {
                while (temp.next != null) {
                    if (temp.next.codigo == codigo) {
                        temp.next = temp.next.next;
                        return true;
                    }
                    temp = temp.next;
                }
                return false;
            }
        }

    }

    buscarProducto(codigo) {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            let temp = this.lista;
            while (temp != null) {
                if (temp.codigo == codigo) {
                    return temp;
                }
                temp = temp.next;
            }
            return false;
        }

    }

    insertarProducto(producto, posicion) {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            if (posicion == 1) {
                if(this.lista == null){
                    this.lista = producto;
                }else{
                    producto.next = this.lista;
                    this.lista = producto;
                }
            } else {
                let temp = this.lista;
                for (let i = 0; i < posicion - 2; i++) {
                    temp = temp.next;
                }
                producto.next = temp.next;
                temp.next = producto;
            }

            return "Producto no encontrado";
        }

    }


}