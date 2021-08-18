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
const getmove = require('./mudels/Moves.js')
const getmoveandweather =require('./mudels/Weather')



//////////

server.use(cors());

/////class//////

// class sendobj {
//     constructor(obiect) {
//         this.datetime = obiect.datetime
//         this.descption = obiect.weather.description

//     }
// };
// class sendobj2{
//     constructor(element){
//         this.titel=element.original_title;
//         this.overvew=element.overview;
//         this.imagurl=`https://image.tmdb.org/t/p/w500/${element.poster_path}`;
//     }
    

// }

////class/////

////////////https://api.themoviedb.org/3/search/movie?api_key=${process.env.THE_MOVIE_DB_API_KEY}&query=${cityName}`;

// http://localhost:3001/getDataFromweathwr?CityName=Seattle
// http://localhost:3001/getmove?CityName=Seattle

// https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY


///move////  https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//////////////////
////////////servers////

server.get('/getDataFromweathwr', getmoveandweather)

server.get('/getmove', getmove)

server.listen(PORT, () => {
    console.log(`Listning on PORT ${PORT}`)
})


////////functions//////////
//////////////////////////
/////////////////////////

// async function getmoveandweather (reqs,respo){

//     let cityreq = reqs.query.CityName;
//     // console.log('rrrrrr',cityreq);
// let weatherarr= await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityreq}&key=${WEATHER_API_KEY}&days=5`)
// // console.log('wwwwwww',weatherarr);
// try {
//             let sendedarray = weatherarr.data.data.map((ele) => {
//                 // console.log(ele);
//                 return new sendobj(ele);
//             })
//             // console.log('aaaaaaa',sendedarray);
//             respo.send(sendedarray);
//         }
//         catch { respo.send('not found')};


// }



// async function getmove(request,respons){
//    let cityreq2=request.query.CityName;

//     let movedata= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVE_KEY}&query=${cityreq2}`);
//     // console.log( 'rrrrrrrr',movedata.data);

//     // respons.send('heloo')}

//     try{ let movesend = movedata.data.results.map((ele) => {
//         // console.log(ele);
//         return new sendobj2(ele);
//     })

//     respons.send(movesend);

//     }
//     catch{respons.send('not found2')}

// }

/////////////function//////
////////////////////////
/////////////////////////





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
