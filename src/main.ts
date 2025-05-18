import {
    calcularPromedioCalificacionesCorto,
    calcularPromedioCalificacionesLargo,
    DetallePromedio
} from './components/helpers';
import { mostrarDetallePromediosEnConsola } from './views/detallePromediosConsole';

const promedio:number = calcularPromedioCalificacionesCorto('calificaciones.txt');
const promedio2:DetallePromedio  = calcularPromedioCalificacionesLargo('calificaciones.txt');
mostrarDetallePromediosEnConsola(promedio2);
console.log(`Promedio corto ${promedio}`);