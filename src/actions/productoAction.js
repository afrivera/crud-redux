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

// FUNCION PARA  OBTENER PRODUCTOS
export const obtenerProductosAction = ()=>{
    return async (dispatch) => {
        dispatch(descargarProductos() );

        try {
            const { data } = await clienteAxios.get('productos');
            
            dispatch( descargaProductosExitosa( data ) );
        } catch (error) {
            dispatch( descargaProductosError() );
        }
    }
}

const descargarProductos = ()=> ({
    type: types.COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa= productos =>({
    type: types.DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = ()=> ({
    type: types.DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

// Selecciona y Elimina el Producto
export const borrarProductoAction = id=>{
    return async (dispatch) =>{
        dispatch( obtenerProductoEliminar( id ) );
        
        try { 
            
            const data = await clienteAxios.delete(`/productos/${ id }`);

            dispatch( eliminarProductoExito() );

            // si se elimina mostrar alerta
            Swal.fire(
                'Elimiando',
                'El Producto se elimino correctamente',
                'success'
              )
        } catch (error) {
            // console.log(error);
            dispatch( eliminarProductoerror() );
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: types.OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});
const eliminarProductoExito =()=>({
    type: types.PRODUCTO_ELIMINADO_EXITO,
});
const eliminarProductoerror= ()=>({
    type: types.PRODUCTO_ELIMINADO_ERROR,
    payload: true
})
