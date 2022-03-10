import types from "../types";

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null
}

const productosReducer = (state = initialState, action)=> {
    switch (action.type) {
        case types.COMENZAR_DESCARGA_PRODUCTOS:
        case types.AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case types.AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case types.PRODUCTO_ELIMINADO_ERROR:
        case types.DESCARGA_PRODUCTOS_ERROR:
        case types.AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload

            }
        case types.OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload
            }
        case types.PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoEliminar),
                productoEliminar: null
            }
        default:
            return state;
    
    }
}

export default productosReducer;