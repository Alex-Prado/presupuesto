import React, {Fragment, useState} from 'react'
import './Formulario.css'

const Prueba = ({Registrar}) => {

    const [cita, MostrarCita] = useState({
        nombre      : '',
        apellido    : '',
        fecha       : '',
        hora        : '',
        descripcion : '',
    })

    const [error, CargarError] = useState(false)

    const CargarDatos = (e) => {
        MostrarCita({...cita,
            [e.target.name]: e.target.value
        })
    }

    const InsertarCita = (e) => {
        e.preventDefault()
        
        if(nombre.trim()      === '' || apellido.trim() === '' ||
           fecha.trim()       === '' || hora.trim()     === '' ||
           descripcion.trim() === ''){
               CargarError(true);
               return ;
           }
           CargarError(false);

        Registrar(cita);

        MostrarCita({
            nombre      : '',
            apellido    : '',
            fecha       : '',
            hora        : '',
            descripcion : '',
        })
    }

    const {nombre, apellido, fecha, hora, descripcion} = cita;

    return ( 
        <Fragment>
            <h1>CITAS DEL PACIENTE</h1>

            <form className='formulario' onSubmit={InsertarCita}>
            {error ? <p>todos los campos deben estar llenos</p> : null}
            <span>nombre</span>
            <input type         = "text"
                   name         = 'nombre'
                   placeholder  = 'nombre'
                   onChange     = {CargarDatos}
                   value        = {nombre}
                   />

            <span>apellido</span>
            <input type         = "text"
                   name         = 'apellido'
                   placeholder  = 'apellido'
                   onChange     = {CargarDatos}
                   value        = {apellido}
                   />

            <span>fecha</span>
            <input type         = "date"
                   name         = 'fecha'
                   onChange     = {CargarDatos}
                   value        = {fecha}
                   />

            <span>hora</span>
            <input type         = "time"
                   name         = 'hora'
                   onChange     = {CargarDatos}
                   value        = {hora}
                   />

            <span>descripcion</span>
            <textarea name         = 'descripcion'
                      onChange     = {CargarDatos}
                      value        = {descripcion}
            ></textarea>

            <button type        = 'submit'
                    className   = 'btn'
            >GUARDAR</button>
            </form>
        </Fragment>

     );
}
 
export default Prueba;