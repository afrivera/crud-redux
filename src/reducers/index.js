import { combineReducers } from 'redux'
import alertaReducer from './alertaReducer';
import productosReducer from './productosReducer'


const combineReducer = combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});

export default combineReducer;