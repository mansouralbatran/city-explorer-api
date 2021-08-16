'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors')

const wData = require('./data/weather.json')

const server = express();
const PORT = process.env.PORT;
server.use(cors());

// http://localhost:3001/getDataFromweathwr?CityName=Seattle&lat=47.60621&lon=-122.33207
server.get('/getDataFromweathwr',(reqs,respo)=>{
    let cityreq=reqs.query.CityName;
    let citylat=reqs.query.lat;
    let citylon=reqs.query.lon;
    let wheathercity = wData.find((obiect)=>{
        if(obiect.city_name===cityreq&&obiect.lat===citylat&&obiect.lon===citylon){
            return obiect;
        }


    });
    respo.send(wheathercity);




})
server.get('*',(reqs,respo)=>{
    res.send('not found')
})
server.listen(PORT,()=>{
    console.log(`Listning on PORT ${PORT}`)
})