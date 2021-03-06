import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction } from '../actions/productoAction';
import Producto from './Producto';

const Productos = () => {

	const dispatch = useDispatch();

	useEffect(()=>{
		// Consultar la Api
		dispatch( obtenerProductosAction() );
		// eslint-disable-next-line
	},[dispatch]);

	// obtener el state 
	const { productos } = useSelector(state => state.productos);
	const { error, loading } = useSelector( state => state.productos );

	return (
		<Fragment>
			<h2 className='text-center my-5'>Listado de Productos</h2>
			{
				error && 
				<p className='font-weight-bold alert alert-danger text-center'>Hubo un Error</p>
			}
			{
				loading &&
				<p className='text-center'>Cargando....</p>
			}
			<table className='table table-striped'>
				<thead className='bg-primary table-dark'>
					<tr>
						<th scope='col'>Nombre</th>
						<th scope='col'>Precio</th>
						<th scope='col'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{
						productos.length === 0 ? 'No Hay Productos':
							(productos.map(producto => (
								<Producto 
									key={producto.id}
									producto={ producto }
								/>
							))
					)}</tbody>
			</table>
		</Fragment>
	)
}

export default Productos