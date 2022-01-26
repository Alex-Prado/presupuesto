import React, {Fragment} from 'react';
import {revisarPresupuesto} from '../helper';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className='presupuesto'>
                <span className='span'>
                    Presupuesto:
                </span>
                 $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                <span className='span'>
                Restante:
                </span>
                 $ {restante}
            </div>
        </Fragment>

     );
}
 
export default ControlPresupuesto;