import types from "../types";
import clienteAxios from '../config/axios';
import Swal from "sweetalert2";

// crear nuevos productos
export const crearNuevoProducto = producto => {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // Insertar en la api
            await clienteAxios.post('/productos', producto );

            // si todo sale bien, actualizar el state
            dispatch( agregarProductoExito( producto ) );

            // Alerta
            Swal.fire(
                'Correcto',
                'El Producto se agregó correctamente',
                'success'
            )

        } catch (error) {
            // console.log(error);
            // si hay un error cambiar el state
            dispatch( agregarProductoError( true ) );
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un Error'
            })
        }
    }
}

const agregarProducto = ()=>({
    type: types.AGREGAR_PRODUCTO,
    payload: true
});

// si el producto se guarda en la bd
const agregarProductoExito = producto => ({
    type: types.AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// si hay algun error
const agregarProductoError = estado =>({
    type: types.AGREGAR_PRODUCTO_ERROR,
    payload: estado
})