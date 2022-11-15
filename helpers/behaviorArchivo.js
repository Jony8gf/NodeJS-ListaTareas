import fs from 'fs'

const archivo = './database/data.json';

const guardarJSON = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerJSON = () => {

    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    return JSON.parse(info);
}

export {guardarJSON, leerJSON}