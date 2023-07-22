// Documentación https://nodejs.org/dist/latest-v20.x/docs/api/fs.html#fswritefilefile-data-options-callback


const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require('colors');

console.clear(); 

// option('l')

// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.base);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

 
// //const base = 2;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));