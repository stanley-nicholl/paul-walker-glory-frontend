
function editMovie(movie){
    const {id, posterURL, title, year, director, storyline, trailerEmbed, rating} = movie.data.movie[0]
    window.location.hash = `movies/${id}`
    document.getElementById('content').innerHTML = editFormTempate(movie)
    document.getElementById('title').value = title
    document.getElementById('director').value = director
    document.getElementById('year').value = year
    document.getElementById('rating').value = rating
    document.getElementById('posterURL').value = posterURL
    document.getElementById('trailerEmbed').value = `http://www.imdb.com/title/tt1430612/videoplayer/${trailerEmbed}`
    document.getElementById('storyline').value = storyline
    document.getElementById('submit').addEventListener('click', (event) => {
      event.preventDefault()
      const update = {}
      update.title = document.getElementById('title').value
      update.director = document.getElementById('director').value
      update.year = document.getElementById('year').value
      update.rating = document.getElementById('rating').value
      update.posterURL = document.getElementById('posterURL').value
      const tempTrailer = document.getElementById('trailerEmbed').value.split('/')
      update.trailerEmbed = tempTrailer[tempTrailer.length-1]
      update.storyline = document.getElementById('storyline').value
      if (checkPW(update.title) === 1){
        if(typeof update.year === NaN){
          document.getElementById('alert').innerHTML = `Release year must be a number`
        }else if(!update.title || !update.director || !update.year || !update.rating || !update.posterURL || !update.trailerEmbed || !update.storyline){
          document.getElementById('alert').innerHTML = `All fields are required to add a movie`
        }else{
          Movie.update(id, update)
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
