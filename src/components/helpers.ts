import { join } from 'path';
import { readFileSync } from 'fs';

// PUNTO 1:
// promedio(archivo:string):number retornamos solo el promedio
export function calcularPromedioCalificacionesCorto(archivoCalificaciones: string): number {
    const rutaArchivoCalificaciones: string = join(__dirname, "..", "data", archivoCalificaciones);
    const contenidoArchivoCalificaciones: string = readFileSync(rutaArchivoCalificaciones, 'utf8');
    const lineasCalificaciones: string[] = contenidoArchivoCalificaciones.split('\n');
    let totalCalificaciones: number = 0;
    let conteoCalificaciones: number = 0;

    for (let indiceLinea: number = 0; indiceLinea < lineasCalificaciones.length; indiceLinea++) {
        const lineaActual: string = lineasCalificaciones[indiceLinea];
        const datosCalificacion: string[] = lineaActual.split(',');

        if (datosCalificacion.length === 2) {
            totalCalificaciones += parseFloat(datosCalificacion[1]);
            conteoCalificaciones++;
        } else {
            console.log(`La línea ${indiceLinea} tiene un formato incorrecto`);
        }
    }

    return totalCalificaciones / conteoCalificaciones;
}

// PUNTO 2
// promedio: number
// estudiantes: string[]
// cantidadEstudiantes: number
export interface DetallePromedio {
    promedio: number,
    estudiantes: string[][],
    cantidadEstudiantes: number
}

export function calcularPromedioCalificacionesLargo(archivoCalificaciones: string): DetallePromedio{
    const rutaArchivoCalificaciones: string = join(__dirname, "..", "data", archivoCalificaciones);
    const contenidoArchivoCalificaciones: string = readFileSync(rutaArchivoCalificaciones, 'utf8');
    const lineasCalificaciones: string[] = contenidoArchivoCalificaciones.split('\n');
    let totalCalificaciones: number = 0;
    let conteoCalificaciones: number = 0;
    let tablaEstudiantes: string[][] = [];
    for (let indiceLinea: number = 0; indiceLinea < lineasCalificaciones.length; indiceLinea++) {
        const lineaActual: string = lineasCalificaciones[indiceLinea];
        const datosCalificacion: string[] = lineaActual.split(',');
        tablaEstudiantes = [...tablaEstudiantes, datosCalificacion];
        if (datosCalificacion.length === 2) {
            totalCalificaciones += parseFloat(datosCalificacion[1]);
            conteoCalificaciones++
        } else {
            console.log(`La línea ${indiceLinea} tiene un formato incorrecto`);
        }
    }
    //console.table(tablaEstudiantes)
    const promedioGeneral: number = totalCalificaciones / conteoCalificaciones;
    return {
        promedio: promedioGeneral,
        estudiantes: tablaEstudiantes,
        cantidadEstudiantes: conteoCalificaciones
    };
}
