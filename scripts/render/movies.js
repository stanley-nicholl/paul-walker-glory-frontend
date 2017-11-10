const pwMovies = [
        {id: 1, title: 'monster in the closet'},
        {id: 2, title: 'programmed to kill'},
        {id: 3, title: 'tammy and the t-rex'},
        {id: 4, title: 'meet the deedles'},
        {id: 5, title: 'pleasantville'},
        {id: 6, title: 'varsity blues'},
        {id: 7, title: "she's all that"},
        {id: 8, title: 'brokedown palace'},
        {id: 9, title: 'the skulls'},
        {id: 10, title: 'the fast and the furious'},
        {id: 11, title: 'joy ride'},
        {id: 12, title: "life makes sense if you're famous"},
        {id: 13, title: '2 fast 2 furious'},
        {id: 14, title: 'timeline'},
        {id: 15, title: 'noel'},
        {id: 16, title: 'into the blue'},
        {id: 17, title: 'eight below'},
        {id: 18, title: 'running scared'},
        {id: 19, title: 'flags of our fathers'},
        {id: 20, title: 'the death and life of bobby z'},
        {id: 21, title: 'stories usa'},
        {id: 22, title: 'the lazarus project'},
        {id: 23, title: 'fast & furious'},
        {id: 24, title: 'takers'},
        {id: 25, title: 'fast five'},
        {id: 26, title: 'vehicle 19'},
        {id: 27, title: 'fast & furious 6'},
        {id: 28, title: 'pawn shop chronicles'},
        {id: 29, title: 'hours'},
        {id: 30, title: 'brick mansions'},
        {id: 31, title: 'furious 7'},
        {id: 32, title: 'fast and furious'},
        {id: 33, title: 'fast and furious 6'}
      ]
let ids = []

function loadList(){
  return Movie.getAll()
    .then(result => {
      let movies = result.data.movies
      let list = `
      <div class="row d-flex justify-content-between">
        <h1 class="mb-5 heading col-8">A sampling of Paul's silver screen gold</h1>
        <button type="button" class="btn btn-warning px-4 mr-3" id="add">Add a movie</button>
      </div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col" class="text-center">Year</th>
            <th scope="col" class="text-center">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
      `
      ids = []
      movies.forEach(movie => {
        ids.push(movie.id)
        list += listTemplate(movie)
      })
      list += `</tbody></table>`
      document.getElementById('content').innerHTML = list
      ids.forEach(id => {
        document.getElementById(id).addEventListener('click', (event) => {
          event.preventDefault()
          loadDetail(id)
        })
      })
      window.location.hash = `movies`
      document.getElementById('add').addEventListener('click', () => {
        newMovie()
      })

    })
}
