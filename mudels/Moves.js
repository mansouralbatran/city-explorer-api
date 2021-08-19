const axios = require('axios');
module.exports = getmove;

let inmomary1={};



async function getmove(request, respons) {
    let cityreq2 = request.query.CityName;

    let movedata = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVE_KEY}&query=${cityreq2}`);
    // console.log( 'rrrrrrrr',movedata.data);

    // respons.send('heloo')}
    if(inmomary1[cityreq2]!==undefined){respons.send(inmomary1[cityreq2])
    
    console.log('data catch');}
    else{
        console.log('data dismiss');
    try {
        let movesend = movedata.data.results.map((ele) => {
            // console.log(ele);
            return new sendobj2(ele);
        })
        inmomary1[cityreq2]=movesend

        respons.send(movesend);

    }
    catch { respons.send('not found2') }

}
}



class sendobj2{
    constructor(element){
        this.titel=element.original_title;
        this.overvew=element.overview;
        this.imagurl=`https://image.tmdb.org/t/p/w500/${element.poster_path}`;
    }
    

}


