
function editMovie(movie){
    const {id, posterURL, title, year, director, storyline, trailerEmbed, rating} = movie.data.movie[0]
    document.getElementById('content').innerHTML = editFormTempate(movie)
    document.getElementById('title').value = title
    document.getElementById('director').value = director
    document.getElementById('year').value = year
    document.getElementById('rating').value = rating
    document.getElementById('posterURL').value = posterURL
    document.getElementById('trailerEmbed').value = trailerEmbed
    document.getElementById('storyline').value = storyline
    document.getElementById('submit').addEventListener('click', (event) => {
      event.preventDefault()
      const update = {}
      update.title = document.getElementById('title').value
      update.director = document.getElementById('director').value
      update.year = document.getElementById('year').value
      update.rating = document.getElementById('rating').value
      update.posterURL = document.getElementById('posterURL').value
      update.trailerEmbed = document.getElementById('trailerEmbed').value
      update.storyline = document.getElementById('storyline').value
      if(!update.title || !update.director || !update.year || !update.rating || !update.posterURL || !update.trailerEmbed || !update.storyline){
        document.getElementById('alert').innerHTML = `All fields are required add a movie`
      }else{
        console.log('test');
        Movie.update(id, update)
          .then(result => {
            loadDetail(result.data.movie[0].id)
          })
      }
    })

}
