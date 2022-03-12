import types from "../types";

// muestra la alerta
export const mostrarAlertaAction = alerta => {
    return dispatch => {

        dispatch( mostrarAlerta( alerta ));

    }
}

const mostrarAlerta= alerta =>({
    type: types.MOSTRAR_ALERTA,
    payload: alerta
});

// ocultar la alerta
export const ocultarAlertaAction =()=>{
    return dispatch => {
        dispatch( ocultarAlerta() );
    }
}

const ocultarAlerta =()=>({
    type: types.OCULTAR_ALERTA
})