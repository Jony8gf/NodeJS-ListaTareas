import { guardarJSON } from './helpers/behaviorArchivo.js';
import { inquirerMenu,pausa,leerInput} from './helpers/inquirer.js';

import { Tareas } from  './models/tareas.js'
 
console.clear();
 
const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  
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
          console.log(tareas.getListadoArr());
        break;
      default:
        break;
    }

    // guardarJSON(tareas.getListadoArr());

    if(opt!=0) await pausa();
  } while (opt !== 0);
};
 
main();