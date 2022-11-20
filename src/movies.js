// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


movies.map(getAllDirectors);

function getAllDirectors(moviesArray) {
    
   return [moviesArray.director].join('')

}

console.log(getAllDirectors)




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

const findDrama = moviesArray => moviesArray.filter(movie => movie.genre.includes('Drama'))

const howManyMovies = moviesArray => {
   
  const stevenMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg')
  const drama = findDrama(stevenMovies)

  return drama.length
}

howManyMovies(moviesArray)

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

 const scoresAverage = moviesArray => {
  if (!moviesArray.length) 
  
  return 0
      
 const reduced = moviesArray.reduce((acc, movie) => {
  if (movie.score && typeof movie.score === 'number') {
    return acc + movie.score
    }

    return acc

    }, 0)
      
    const decimals = parseFloat((reduced/moviesArray.length).toFixed(2))
      
    return decimals

 }
      


}




// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesScore = moviesArray => scoresAverage(findDrama(moviesArray))

console.log(dramaMoviesScore)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const orderByYear = moviesArray => {
        const copy = moviesArray.map(movie => movie)
      
        copy.sort((movieA, movieB) => {
          if (movieA.year === movieB.year) return movieA.title.localeCompare(movieB.title)
      
          return movieA.year - movieB.year   
        })
      
        return copy
}

orderByYear(moviesArray)

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
