import types from "../types";

// crear nuevos productos
export const crearNuevoProducto = producto => {
    return () => {
        console.log(producto);
    }
}