import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    combineReducer,
    composeEnhancers( applyMiddleware(thunk) )
    // compose( applyMiddleware( thunk ))
    //     typeof window ==='objet' &&
    //         typeof window.__REDUX_DEVTOOLS_EXTESION__ !=='undefined' ?
    //             window.__REDUX_DEVTOOLS_EXTESION__() : f => f  
    
);

  
export default store;

