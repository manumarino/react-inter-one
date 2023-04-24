import React from 'react';
import PropTypes from 'prop-types';
import { Radar } from '../../models/radar.class';

function RadarComponent({ radar }) {
  return (
    <div>
        <h2>
            Nombre: { radar.radar }
        </h2>
        <h3>
            Available: { radar.available ? 'DISPONIBLE' : 'NO DISPONIBLE' }
        </h3>
        <h4>          
            Experimental: { radar.experimental ? 'EXPERIMENTAL' : 'OPERATIVO' }
        </h4>
        <h5>
            Basename: { radar.basename }
            <br />
            Producto: { radar.producto }
            <br />
            Extension: { radar.extension }
            
        </h5>
    </div>
  )
};

RadarComponent.propTypes = {
    radar: PropTypes.instanceOf(Radar)

}

export default RadarComponent
