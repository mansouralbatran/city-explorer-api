const axios = require('axios'); 
module.exports = getmoveandweather; 
async function getmoveandweather (reqs,respo){

    let cityreq = reqs.query.CityName;
    // console.log('rrrrrr',cityreq);
let weatherarr= await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityreq}&key=${process.env.WEATHER_API_KEY}&days=5`)
// console.log('wwwwwww',weatherarr);
try {
            let sendedarray = weatherarr.data.data.map((ele) => {
                // console.log(ele);
                return new sendobj(ele);
            })
            // console.log('aaaaaaa',sendedarray);
            respo.send(sendedarray);
        }
        catch { respo.send('not found')};


}
class sendobj {
    constructor(obiect) {
        this.datetime = obiect.datetime
        this.descption = obiect.weather.description

    }}