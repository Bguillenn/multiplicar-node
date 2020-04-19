const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo de texto que contiene la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}