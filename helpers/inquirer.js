import inquirer from 'inquirer';

 
import colors from 'colors';
 
const menuOpts = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Seleccione una opción',
    choices: [
        {
            value: 1,
            name: `${'1.'.green} Crear tarea`
        },
        {
            value: 2,
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: 3,
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: 4,
            name: `${'4.'.green} Listar tareas pendientes`
        },
        {
            value: 5,
            name: `${'5.'.green} Completar tarea(s)`
        },
        {
            value: 6,
            name: `${'6.'.green} Eliminar tarea(s)`
        },
        {
            value: 0,
            name: `${'0.'.green} Salir`
        }
    ],
  },
];
 
const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción'.white);
  console.log('===========================\n'.green);
 
  const {opcion} = await inquirer.prompt(menuOpts);
 
  return opcion;
};

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.red} para continuar`
        }
    ]
    await inquirer.prompt(question);
}


const leerInput = async (mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: `\n ${mensaje}`,
            validate(value){
                if(value.length === 0) return 'Por favor ingrese un valor'
                return true;
            }
        }
    ]
    const {desc} = await inquirer.prompt(question);
    return desc;
}

export { inquirerMenu, pausa, leerInput};