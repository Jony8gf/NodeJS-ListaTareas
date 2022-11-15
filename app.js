import { guardarJSON, leerJSON } from './helpers/behaviorArchivo.js';
import { inquirerMenu, pausa, leerInput, listadoTareaBorrar, confirmacionBorrar} from './helpers/inquirer.js';

import { Tareas } from  './models/tareas.js'
 
console.clear();
 
const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasJSON = leerJSON();

  if(tareasJSON){
    tareas.cargarTareasFromArray(tareasJSON);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Crear tarea
        const desc = await leerInput('Descripción de la tarea: ');
        tareas.crearTarea(desc);
        break;
      case 2:
          //Listado Tareas
          tareas.cargarListadoCompleto();
        break;
      case 3:
          //Listado Tareas Completadas
          tareas.listarTareasCompletadasOPendientes(true);
        break;
      case 4:
          //Listado Tareas Pendientes
          tareas.listarTareasCompletadasOPendientes(false);
        break;
      case 5:
        //Completar tarea
        //TODO
      break;
      case 6:
        //Borrar tarea
        const id = await listadoTareaBorrar(tareas.getListadoArr());
        if(id !== '0'){
          const ok = await confirmacionBorrar('¿Desea borrar la tarea?');
          if(ok) {
            tareas.borrarTarea(id);
            console.log('Tarea eliminada'.red);
          }
        }
      break;
      default:
        break;
    }

    guardarJSON(tareas.getListadoArr());

    if(opt!=0) await pausa();
  } while (opt !== 0);
};
 
main();