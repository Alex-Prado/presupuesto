import React from 'react'

const Cita = ({cita, EliminarCita}) => (
     <div className='agenda'>
         <p>nombre:      <span>{cita.nombre}</span></p> 
         <p>apellido:    <span>{cita.apellido}</span></p> 
         <p>dni:         <span>{cita.dni}</span></p> 
         <p>mascota:     <span>{cita.mascota}</span></p> 
         <p>descripcion: <span>{cita.descripcion}</span></p>
         <button
            className = 'btn'
            onClick   = {() => EliminarCita(cita.id)}
         >ELIMINAR</button>
         
     </div>
     );

 
export default Cita;