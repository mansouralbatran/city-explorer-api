const axios = require('axios'); 
module.exports = handleMovie; 



async function getmove(request,respons){
    let cityreq2=request.query.CityName;
 
     let movedata= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVE_KEY}&query=${cityreq2}`);
     // console.log( 'rrrrrrrr',movedata.data);
 
     // respons.send('heloo')}
 
     try{ let movesend = movedata.data.results.map((ele) => {
         // console.log(ele);
         return new sendobj2(ele);
     })
 
     respons.send(movesend);
 
     }
     catch{respons.send('not found2')}
 
 }

 https://image.tmdb.org/t/p/w500


 class sendobj2{
    constructor(element){
        this.titel=element.original_title
        this.overvew=element.overview
        this.imagurl=`https://imag.tmdb.org/t/p/original/${element.backdrop_path}`
        this.popularity = movie.popularity;
        this.releasedOn = movie.release_date;
    }
    

}