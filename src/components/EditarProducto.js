import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoAction';

const EditarProducto = () => {

  const navigate = useNavigate();

  // nuevo state de producto
  const [producto, setProducto] = useState({
    nombre: '',
    precio: ''
  })
  const dispatch = useDispatch();
  
  // Producto a editar 
  const { productoEditar } = useSelector(state => state.productos );
  // llenar el state automaticamente
  useEffect(()=> {
    setProducto( productoEditar );
  },[ productoEditar ]);
  const { nombre, precio } = producto;
  


  // leer los datos del formulario
  const onChangeFormulario = e=>{
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  // realizar submit al formulario
  const handleEditarProducto = e=> {
    e.preventDefault();

    dispatch( editarProductoAction( producto ));

    navigate('/');
  }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center mb-4 font-weight-bold'>
                Editar Producto
              </h2>

              <form
                onSubmit={handleEditarProducto}
              >
                <div className='form-group'>
                  <label>Nombre Producto</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nombre Producto'
                    name='nombre'
                    value={nombre}
                    onChange={onChangeFormulario}
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
                    onChange={onChangeFormulario}
                  />

                </div>
				<button
					type='submit'
					className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
				>Guardar Cambios</button>

              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditarProducto;