'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors')
const axios = require('axios')

const wData = require('./data/weather.json')

const server = express();
////cods/////
const PORT = process.env.PORT;
const WEATHER_API_KEY= process.env.WEATHER_API_KEY;
////////////

server.use(cors());

/////class//////

class sendobj {
    constructor(obiect) {
        this.datetime = obiect.datetime
        this.descption = obiect.weather.description

    }
}
////////////
// http://localhost:3001/getDataFromweathwr?CityName=Seattle&lat=47.60621&lon=-122.33207

// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
//////////////////
////////////servers////
server.get('/getDataFromweathwr', getmoveandweather)




////////functions/////
async function getmoveandweather (reqs,respo){

    let cityreq = reqs.query.CityName;
    // console.log('rrrrrr',cityreq);
let weatherarr= await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityreq}&key=${WEATHER_API_KEY}&days=5`)
// console.log('wwwwwww',weatherarr);
try {
            let sendedarray = weatherarr.data.data.map((ele) => {
                // console.log(ele);
                return new sendobj(ele);
            })
            console.log('aaaaaaa',sendedarray);
            respo.send(sendedarray);
        }
        catch { respo.send('not found')};


}







////lab7////
////////////
// server.get('/getDataFromweathwr', (reqs, respo) => {
//     let cityreq = reqs.query.CityName;
//     // let citylat=reqs.query.lat;
//     // let citylon=reqs.query.lon;
//     let wheathercity = wData.find((obiect) => {
//         if (obiect.city_name.toLowerCase === cityreq.toLowerCase) {
//             return obiect;
//         }


//     });
    //////////
    
//     try {
//         let sendedarray = wheathercity.data.map((ele) => {
//             // console.log(ele);
//             return new sendobj(ele);
//         })
//         console.log(sendedarray);
//         respo.send(sendedarray);
//     }
//     catch { respo.send('not found')};
// })
server.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`)
})