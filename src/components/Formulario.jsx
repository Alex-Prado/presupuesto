import React, {useState, Fragment} from 'react'
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = (e) => {
        e.preventDefault();

        //! VALIDAR CANTIDAD
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false)

        // let fecha = 
        // fecha.getDate() + "-"+ fecha.getMonth()+ "-" +fecha.getFullYear();

        //! CONSTRUIR EL GASTO
        const gasto = {
            nombre ,
            cantidad,
            fecha : new Date().toLocaleDateString(),
            id : shortid.generate(),
        }
        // console.log(gasto);

        //! PASAR EL GASTO AL COMPONENTE PRINCIPAL
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //! RESETEAR EL FORM
        guardarNombre('')
        guardarCantidad(0)

    }

    return ( 
        <Fragment>
         <div className='form'>
             
            <h3>Agrega tus Gastos</h3>
            <form onSubmit={agregarGasto} >
            {error ? <Error mensaje="campos obligatorios o cantidad inconrrecta"/> : null}
   
            <div className='campo'>
                <label>nombre gasto:</label>
                <input type        = "text"
                       className   = 'caja'
                    //    placeholder = 'Ejem. transporte'
                       value       = {nombre}
                       onChange    = {e => guardarNombre(e.target.value)}
                       />
            </div>

            <div className='campo'>
                <label>cantidad gasto:</label>
                <input type        = "number"
                       className   = 'caja'
                    //    placeholder = 'ej 300'
                       value       = {cantidad}
                       onChange    = {e => guardarCantidad(parseInt(e.target.value))}
                       />
            </div>

            <button type        = "submit"
                   className   = 'btn-form'
                   
                   >Agregar Gasto</button>
            
        </form>
    </div>
        </Fragment>
     );
}
 
export default Formulario;