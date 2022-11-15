import { Tarea } from "./tarea.js";

class Tareas {

    _listado = {};
    
    constructor() {
        this._listado = {};
    }

    getListadoArr = () => {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarListadoCompleto() {
        this.getListadoArr().forEach((tarea, i) => {
            const idx = `${i+1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${idx} - ${desc} :: ${estado}`)
        })
    }

    listarTareasCompletadasOPendientes(completadas = true){
        let contador = 0;
        this.getListadoArr().forEach((tarea) => {
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            if(completadas){
                if(completadoEn){
                    contador++;
                    console.log(`${contador.toString().green} - ${desc} :: ${estado}`);
                }
            }else{
                if(!completadoEn){
                    contador++;
                    console.log(`${contador.toString().green} - ${desc} :: ${estado}`);
                }
            } 
        })
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

}

export {Tareas};