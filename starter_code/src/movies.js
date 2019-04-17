/* eslint no-restricted-globals: 'off' 
title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'

*/

function MovieConstructor (movieArray){
    
    this.movie = function () {
        //Change original array from here
        // Turn duration of the movies from hours to minutes
        movieArray.map((v, i) => {
            let x = v.duration.split(" ");
            let minutes = (parseInt(x[0]) * 60) + parseInt(x[1]); //Convert to minutes
            movieArray[i].durationMin = minutes;
        })
        return movieArray;
    }()
        //Return avarage rate List or List from specific action
    this.actions = function (movieList,action) {
        
        if (arguments.length === 2) {
            //2 Argument passed
            //Array + action passed
            if (Array.isArray(arguments[0])) {
                movieArray = arguments[0]; //Array to parse
                action = arguments[1] //Action to use
            }
        } else if (arguments.length === 1) {
            //1 Argument passed : Array or Action ?
            if (Array.isArray(arguments[0])) {
                //Array is passed no action required
                movieArray = arguments[0];
                action = "DEFAULT"
            } else {
                //Action only has been passed use default Array with action
                movieArray = this.movie
                action = arguments[0]
            }
        }else if (arguments.length === 0){
            //No arguments passed
            movieArray = this.movie
            action = action = "DEFAULT";
        }else{
            throw "Wrong ARGS passed !";
        }


        let avarageList = [];
        movieArray.map(function (v,i) {
            avarageList.push(v.rate);
        })

        
        switch (action.toLowerCase()) {
            case "reduce":
            //Reduce avarage rate
                const sum = avarageList.reduce(function (accumulator, currentValue) {
                    return parseFloat(accumulator) + parseFloat(currentValue);
                });
                const avarage = sum / avarageList.length;
                //return reduced AVG Array
                return parseFloat(avarage).toFixed("2");                               
                break;
        
            default:
            //Return AVG Array with no extra actions
            return avarageList;
                break;
        }
        
    }
        //Return avarage rate by GENRE
    this.genreMoviesAvgRate = function (genre) {
        //get all the movie with specific genre
        if (!genre) { throw ("Pass genre as argument") }

        let movieByGenre = [];

        this.movie.filter(function (v, i) {
            if (Array.isArray(v.genre)) {
                v.genre.forEach(g => {
                    if (g.toLowerCase() === genre.toLowerCase()) {
                        movieByGenre.push(v);
                    }
                });
            }
        })

        //Check if something has been found before to procede to calculate AVG RATE
        //Otherwise return FALSE
        if (movieByGenre.length > 0) {
            //Movies found, pass the array to this.ratesAverage function to have the AVG RATE
            // with action reduce
            return this.actions(movieByGenre, "reduce")

        } else {
            throw ("No movie found with genre: " + genre);
            return false;
        }
    }

    this.orderByDuration = function (movieList) {
        if(!Array.isArray(movieList)){
            movieList = this.movie;
        }
        //sort + filter
        let sorted = [];
        sorted = movieList.sort(function (v,i) {          
            return v.durationMin - i.durationMin            
        })

        return sorted;

    }

    this.howManyMovies = function (movieList,director,genre) {
        if(!Array.isArray(movieList)){
            movieList = this.movie;
        }
        let movies = []
        //filter by genre
        

    }
    
    
}


var myMovie = new MovieConstructor(movies);

// myMovie.actions("reduce") ----> Reduced Avarage
//   console.log(myMovie.actions());
// myMovie.actions() ----> List all Avarage Avarage
// myMovie.genreMoviesAvgRate("Drama") --> Give Reduced AVG RATE of specified GENRE (Genre is case insensitive)


console.log( myMovie.orderByDuration() );






// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

