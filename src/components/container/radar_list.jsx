import React from 'react';
import RadarComponent from '../pure/radar';
import { Radar } from '../../models/radar.class';
import { BASENAME_RADAR, EXTENSION_RADAR, PRODUCTO_RADAR } from '../../models/radar.enum';

function RadarListComponent(props) {

    const defaultRadar = new Radar('Ezeiza RMA2', true, false, PRODUCTO_RADAR.COLMAX, EXTENSION_RADAR.KM240, BASENAME_RADAR.ANGUIL_CMAX_240_ZH);


  return (
    <div>
        <div>
            Your Radars:
        </div>
        {/* TODO: Aplicar un For/Map para renderizar una lista */}
        <RadarComponent radar={defaultRadar} ></RadarComponent>
    </div>
  )
}

export default RadarListComponent;
