import React, {Fragment, useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import  Gasto  from './components/Gasto';
import ControlPresupuesto from './components/ControlPresupuesto';




function App() {

  //*! DEFINIR EL STATE
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false);

  //! USEEFFECT QUE ACTUALIZA EL RESTANTE
  useEffect(() => {
    if(creargasto){
      
      //! AGREGAR EL NUEVO PRESUPUESTO
      guardarGastos([...gastos, gasto])

      //! RESTA EL PRESUPUESTO ACTUAL
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

    //! RESETEAR A FALSE
    guardarCrearGasto(false)
    }
  },[gasto, creargasto, gastos, restante]);

  //! CUANDO AGREGAMOS UN NUEVO GASTO
  // const agregarNuevoGasto = (gasto) => {
  //   guardarGastos([...gastos, gasto])
  // }

  return (
    <Fragment>
    <i className="icono fa fa-bars" aria-hidden="true"></i><h2 className='titulo'>LISTA DE TUS GASTOS</h2>
      <div>
        <div className='right'>
        {/* {mostrarpregunta ? ( */}
          <Pregunta
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante    = {guardarRestante}
            actualizarPregunta = {actualizarPregunta}
        />
        {/* ) : ( */}
          {/* <div className='fila'>
          <div className='columna'> */}
            <Formulario
                guardarGasto = {guardarGasto}
                guardarCrearGasto = {guardarCrearGasto}
            />
        </div>
          {/* </div>
          <div className='columna'> */}
          
          <div className='listagastos'>

            {gastos.map(gasto => (
              <Gasto
              gasto = {gasto}
              key={gasto.id}
              />
              ))}
              
          </div>
          <div className='montos'>
            {/* <h2>Tus Ingresos</h2> */}
            <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
                  />
          </div>
          {/* </div> */}
        {/* </div> */}
        {/* // )
        // } */}
        

        
      </div>
      
    </Fragment>
  );
}

export default App;
