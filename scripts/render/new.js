

function newMovie(){
  document.getElementById('content').innerHTML = newFormTemplate()
  document.getElementById('submit').addEventListener('click', (event) =>{
    event.preventDefault()
    const movie = {}
    movie.title = document.getElementById('title').value
    movie.director = document.getElementById('director').value
    movie.year = parseInt(document.getElementById('year').value)
    movie.rating = document.getElementById('rating').value
    movie.posterURL = document.getElementById('posterURL').value
    const tempTrailer = document.getElementById('trailerEmbed').value.split('/')
    movie.trailerEmbed = tempTrailer[tempTrailer.length-1]
    movie.storyline = document.getElementById('storyline').value
    if (checkPW(movie.title) === 1){
      if(typeof movie.year === NaN){
        document.getElementById('alert').innerHTML = `Release year must be a number`
      }else if(!movie.title || !movie.director || !movie.year || !movie.rating || !movie.posterURL || !movie.trailerEmbed || !movie.storyline){
        document.getElementById('alert').innerHTML = `All fields are required to add a movie`
      }else{
        Movie.create(movie)
          .then(result => {
            loadDetail(result.data.movie[0].id)
          })
      }

    }else{
      document.getElementById('alert').innerHTML = `Paul Walker movies only, please`
      return null
    }
  })
}

function checkPW(title){
  let result =0
  const check = title.toLowerCase()
  pwMovies.forEach(movie => {
    if(movie.title === check){
      result = 1
    }
  })
    return result
}
