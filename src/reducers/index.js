import { combineReducers } from 'redux'
import productosReducer from './productosReducer'


const combineReducer = combineReducers({
    productos: productosReducer,
});

export default combineReducer;