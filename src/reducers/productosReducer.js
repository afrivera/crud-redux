import types from "../types";

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
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
        default:
            return state;
    
    }
}

export default productosReducer;