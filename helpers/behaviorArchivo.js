import fs from 'fs'

const guardarJSON = (data) => {
    const archivo = './database/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
}

export {guardarJSON}