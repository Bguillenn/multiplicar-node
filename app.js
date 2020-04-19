const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limi)
            .then(archivo => console.log(`Se ha creado el archivo ${archivo.green} con exito`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(argv.limite);