const axios = require('axios');


const getLugarlatLng = async(direccion) => {

    const encodeUlr = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '41d571dc28mshd2b53c55d12d4e2p110d3bjsn879b532caa6f' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const locacion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        locacion,
        lat,
        lng
    }
}

module.exports = {
    getLugarlatLng
}