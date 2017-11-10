

function loadMovieDetails(movie){
  const {posterURL, title, year, director, storyline, trailerEmbed, rating} = movie.data.movie[0]
  return `
  <div id="content-area">
    <div class="row">
      <div class="col-lg-5 col-xs-8 d-flex flex-column">
        <img id="movie-poster" src=${posterURL} alt="movie poster">
        <div class="buttons d-flex justify-content-between">
          <button type="button" class="btn btn-warning px-2" id="edit">Edit Movie</button>
          <button type="button" class="btn btn-dark px-2" id="back">Back to List</button>
          <button type="button" class="btn btn-danger px-2" id="delete">Delete Movie</button>
        </div>
      </div>

      <div class="col-lg-1 col-sm-1"></div>
      <div class="col-lg-5 col-xs-8 d-flex flex-column justify-content-between">
        <div class="details">
          <p id="title" class="detail mb-3"><span class="bold-listing">Title:</span> ${title}</p>
          <p id="director" class="detail mb-3"><span class="bold-listing">Director:</span> ${director}</p>
          <p id="year" class="detail mb-3"><span class="bold-listing">Year:</span> ${year}</p>
          <p id="rating" class="detail mb-3"><span class="bold-listing">Rating:</span> ${rating}</p>
        </div>
        <div class="trailer-synopsis">
          ${trailerEmbed}
          <p id="storyline" class="detail mt-1">${storyline}</p>
        </div>
      </div>
    </div>
  </div>
  `
}
