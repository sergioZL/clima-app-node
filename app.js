const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la siudad para obtener el clima',
        demand: true
    }
}).argv;

// // argv.direccion
// lugar.getLugarlatLng(argv.direccion)
//     .then(
//         console.log
//     );

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    //salida 
    try {
        const coords = await lugar.getLugarlatLng(direccion);

        const tiempo = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${ coords.locacion } es de ${ tiempo } °C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${coords.locacion}`;
    }

}

getInfo(argv.direccion).then(resp => console.log(resp)).catch(err => console.log(err));