

function loadDetail(id){
  Movie.getOne(id)
    .then(movie => {
      window.location.hash = `movies/${id}`
      document.getElementById('content').innerHTML = loadMovieDetails(movie)
      document.getElementById('back').addEventListener('click', loadList)
      document.getElementById('edit').addEventListener('click', (event) => {
        event.preventDefault()
        editMovie(movie)
      })
      document.getElementById('delete').addEventListener('click', (event) => {
        event.preventDefault()
        const id = movie.data.movie[0].id
        const index = ids.indexOf(id)
        ids.splice(index, 1)
        destroyMovie(id)
      })
    })
}

function destroyMovie(id) {
  Movie.destroy(id)
    .then(result => {
      loadList()
    })
}
