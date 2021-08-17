'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors')

const wData = require('./data/weather.json')

const server = express();
const PORT = process.env.PORT;
server.use(cors());

class sendobj {
    constructor(obiect) {
        this.datetime = obiect.datetime
        this.descption = obiect.weather.description

    }
}

// http://localhost:3001/getDataFromweathwr?CityName=Seattle&lat=47.60621&lon=-122.33207
server.get('/getDataFromweathwr', (reqs, respo) => {
    let cityreq = reqs.query.CityName;
    // let citylat=reqs.query.lat;
    // let citylon=reqs.query.lon;
    let wheathercity = wData.find((obiect) => {
        if (obiect.city_name.toLowerCase === cityreq.toLowerCase) {
            return obiect;
        }


    });
    
    try {
        let sendedarray = wheathercity.data.map((ele) => {
            // console.log(ele);
            return new sendobj(ele);
        })
        console.log(sendedarray);
        respo.send(sendedarray);
    }
    catch { respo.send('not found')};
})
server.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`)
})