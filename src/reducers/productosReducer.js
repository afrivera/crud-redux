import types from "../types";

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

const productosReducer = (state = initialState, action)=> {
    switch (action.type) {
        case types.AGREGAR_PRODUCTO:
            return {
                ...state
            }
        default:
            return state;
    
    }
}

export default productosReducer;