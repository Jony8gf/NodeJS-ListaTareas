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
          console.log(tareas._listado);
        break;
      default:
        break;
    }
    await pausa();
  } while (opt !== 0);
};
 
main();