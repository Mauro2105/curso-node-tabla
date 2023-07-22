
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    
    try{ 
        
        let salida  = '';
        let consola = '';

        for(let num = 1; num <=hasta; num++){
            salida += `${ base } x ${ num } = ${ base * num }\n`;
            consola += `${ base } ${ 'x'.green } ${ num } ${ '='.green } ${ base * num }\n`;
        }

        if ( listar ){
            console.log('===================='.green);
            console.log('   Tabla del:'.green, colors.blue( base ) );
            console.log('===================='.green);

            console.log(consola);
        }
        

        // Creamos un archivo persintente 
        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${ base }.txt creado`);
        // })

        //Otra forma de crear el archivo
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt creado`;
    } catch (err){
        throw err;
    }            
}

module.exports = {
    crearArchivo
}