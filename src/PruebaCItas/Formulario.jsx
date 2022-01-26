import React, {Fragment, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './Formulario.css'
const Formulario = ({crearCita}) => {

    const [citas, actualizarCitas] = useState({
        nombre      : '',
        apellido    : '',
        dni         : '',
        mascota     : '',
        descripcion : '',
    })

    const [error, guardarError] = useState(false)

    const guardarDatos = (e) => {
        actualizarCitas({
            ...citas,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, apellido, dni, mascota, descripcion} = citas;

    const submitCita = (e) => {
        e.preventDefault();
        
        //*! VALIDAR CAMPOS VACIOS

        if(nombre.trim() === '' || apellido.trim() === '' 
           || dni.trim() === '' || mascota.trim() === '' 
           || descripcion.trim() === ''){
               guardarError(true);
               return;
           } 
           guardarError(false)

        //*! ASIGNAR UN ID

        citas.id = uuidv4();

        //*!GURADAR LA CITA
        crearCita(citas)

        //*! REINICIAR EL FORM
        actualizarCitas({
            nombre      : '',
            apellido    : '',
            dni         : '',
            mascota     : '',
            descripcion : '',
        })
    }

    return (
    <Fragment>
        

        <form onSubmit={submitCita} className='formulario'>
            {error ? <p>todos los campos deben estar llenos</p>
                   : null}

            <span>nombre</span>
            <input type        = 'text'
                   name        = 'nombre' 
                   placeholder = 'nombre'
                   onChange    = {guardarDatos}
                   value       = {nombre}
                   />

            <span>apellido</span>
            <input type        = 'text'
                   name        = 'apellido' 
                   placeholder = 'apellido'
                   onChange    = {guardarDatos}
                   value       = {apellido}
                   />

            <span>dni</span>
            <input type        = 'text'
                   name        = 'dni' 
                   placeholder = 'dni'
                   onChange    = {guardarDatos}
                   value       = {dni}
                   />

            <span>mascota</span>
            <input type        = 'text'
                   name        = 'mascota' 
                   placeholder = 'mascota'
                   onChange    = {guardarDatos}
                   value       = {mascota}
                   />

            <span>descripcion</span>
            <textarea
                    name       = 'descripcion'
                    onChange   = {guardarDatos}
                    value      = {descripcion}
                    >
            </textarea>

            <button
                    type       = 'submit'
                    className  = 'btn'
            >GUARDAR</button>
        </form>
    </Fragment>
    )
}
 
export default Formulario;