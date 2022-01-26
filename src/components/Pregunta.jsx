import React,{Fragment, useState} from 'react'
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //*! VALIDAR FORMULARIO
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }
        guardarError(false)

        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return ( 
        <Fragment>
            <div className='divformulario'>

            <h3>Agrega tus Ingresos</h3>
            {error ? <Error mensaje = 'el presupuesto es incorrecto'/> : null}
            <form onSubmit={agregarPresupuesto}>
                <input  type        = "number"
                        className   = 'caja'
                        // placeholder = 'coloca tu presupuesto'
                        onChange    = {definirPresupuesto}
                        />

                <button  type        = "submit"
                        className   = 'btn-form' 
                        
                        >Agregar Ingreso</button>
            </form>
            </div>
        </Fragment>
    );
}
 
export default Pregunta;