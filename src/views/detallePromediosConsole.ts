// noinspection TypeScriptUnresolvedReference

import { DetallePromedio } from '../components/helpers';
require('colors');

export function mostrarPantallaInicio(): void {
    limpiarConsola();
    const arteAscii = String.raw`
 _   _       _              _____       _            _
| \ | |     | |            /  __ \     | |          (_)
|  \| | ___ | |_ __ _ ___  | /  \/ ___ | | ___  __ _ _  ___
| . \ |/ _ \| __/ _\`/ __| | |    / _ \| |/ _ \/ _\`| |/ _ \
| |\  | (_) | || (_| \__ \ | \__/\ (_) | |  __/ (_| | | (_) |
\_| \_/\___/ \__\__,_|___/  \____/\___/|_|\___|\__, |_|\___/
                                                __/ |
                                               |___/
_______________________________________________________________
  `;
    console.log(arteAscii.cyan);
}

export function mostrarDetallePromediosEnConsola(detallePromedio: DetallePromedio): void {
    mostrarPantallaInicio();
    console.log(`Resultado del promedio general: ${detallePromedio.promedio}`);
    console.log(`Cantidad de estudiantes: ${detallePromedio.cantidadEstudiantes}`);
    console.table(detallePromedio.estudiantes);
}

function limpiarConsola(): void {
    console.clear();
}

