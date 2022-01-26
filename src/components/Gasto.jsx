import React from 'react';

const Gasto = ({gasto}) => {
  return <div className='gastos'>
      <li>
          {gasto.nombre}
          <span className='gasto'>$ {gasto.cantidad}</span>
          <span className='gasto'>{gasto.fecha}</span>
      </li>
  </div>;
};

export default Gasto;