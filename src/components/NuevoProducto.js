import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// actions de redux
import { crearNuevoProducto } from '../actions/productoAction'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaAction'

const NuevoProducto = () => {

	const navigate = useNavigate()
	// state del componente
	const [nombre, setNombre ] =  useState('');
	const [precio, setPrecio ] =  useState(0);

	// utilizar useDispatch y te crea una función
	const dispatch = useDispatch();

	// acceder al state del store
	const { loading, error } = useSelector(state=> state.productos);
	const { alerta } = useSelector( state => state.alerta);

	// cuando el usuario haga submit
	const handleSubmit = e=> {
		e.preventDefault();

		// validar formulario
		if( nombre.trim() === '' || precio <=0) {
			const alerta = {
				msg: 'Ambos Campos son Obligatorios',
				classes: 'alert alert-danger text-center text-uppercase p3'
			}
			dispatch( mostrarAlertaAction( alerta ) );
			return;
		}

		// si no hay errores
		dispatch( ocultarAlertaAction() );

		// crear el nuevo producto
		dispatch( crearNuevoProducto( {nombre, precio} ) )

		
		// redireccionar
		navigate('/');
	}

	
	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'>
							Agregar Nuevo Producto
						</h2>
						{
							alerta && 
							<p className={ alerta.classes }>{alerta.msg}</p>
						}

						<form
							onSubmit={handleSubmit}
						>
							<div className='form-group'>
								<label>Nombre Producto</label>
								<input
									type='text'
									className='form-control'
									placeholder='Nombre Producto'
									name='nombre'
									value={nombre}
									onChange={e => setNombre(e.target.value)}
								/>
							</div>
							<div className='form-group'>
								<label>Precio Producto</label>
								<input
									type='number'
									className='form-control'
									placeholder='Precio Producto'
									name='precio'
									value={precio}
									onChange={e =>  setPrecio( Number (e.target.value))}
								/>

							</div>
							<button
								type='submit'
								className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
							>Agregar</button>

						</form>
						{
							loading &&
							<p>Cargando....</p>
						}
						{
							error &&
							<p className='alert alert-danger p2 mt-4 text-center'>Hubo un Error</p>
						}
					</div>
				</div>
			</div>
		</div>
	)
	}

export default NuevoProducto