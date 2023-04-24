import { BASENAME_RADAR, EXTENSION_RADAR, PRODUCTO_RADAR } from "./radar.enum";

export class Radar {
    radar= "";
    available= false;
    experimental= false;
    producto= PRODUCTO_RADAR.CMAX;
    extension= EXTENSION_RADAR.KM240;
    basename= BASENAME_RADAR;

    constructor(radar, available, experimental, producto, extension, basename){
        this.radar = radar;
        this.available = available;
        this.experimental = experimental;
        this.producto = producto;
        this.extension = extension;
        this.basename = basename
    }


}