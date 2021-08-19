const axios = require('axios');
module.exports = getmoveandweather;
let inmomary2 = {};



async function getmoveandweather(reqs, respo) {

    let cityreq = reqs.query.CityName;
    // console.log('rrrrrr',cityreq);
    let weatherarr = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityreq}&key=${process.env.WEATHER_API_KEY}&days=5`)
    // console.log('wwwwwww',weatherarr);

    if (inmomary2[cityreq] !== undefined) {
        respo.send(inmomary2[cityreq])

        console.log('catch weather data');
    }
    else {
        console.log('dis miss weather data')

        try {
            let sendedarray = weatherarr.data.data.map((ele) => {
                // console.log(ele);
                return new sendobj(ele);
            })


            inmomary2[cityreq] = sendedarray
            // console.log('aaaaaaa',sendedarray);
            respo.send(sendedarray);
        }
        catch { respo.send('not found') };


    }
}
class sendobj {
    constructor(obiect) {
        this.datetime = obiect.datetime
        this.descption = obiect.weather.description

    }
}