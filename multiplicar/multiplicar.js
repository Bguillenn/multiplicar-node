// IMPORTACIONES
const fs = require('fs');
const colors = require('colors');
// FIN IMPORTACIONES

let listarTabla = (base, limite = 10) => {

    if (!Number(base)) return console.log(`El valor ${base} no es un numero`);
    if (!Number(limite)) return console.log(`El valor ${limite} no es un numero`);

    console.log('========================='.green);
    console.log(`== TABLA DEL ${base} ==`.red);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${ base }  * ${ i } = ${ base*i }`);

}

let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) throw new Error(`El valor ${base} no es un numero`);
    if (!Number(limite)) throw new Error(`El valor ${limite} no es un numero`);

    let data = '';
    for (let i = 1; i <= limite; i++)
        data += (`${ base }  * ${ i } = ${ base*i }\n`);

    let fileName = `tabla-${base}-al-${limite}.txt`;

    fs.writeFile(`./tablas/${ fileName }`, data, (err) => {
        if (err) throw err;
        // console.log(`El archivo ${ fileName } ha sido creado con exito`);
    });

    return fileName;
}


module.exports = {
    crearArchivo,
    listarTabla
}