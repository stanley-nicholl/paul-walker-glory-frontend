function newFormTemplate(){
  return `
  <form>
    <h1 class="mb-5">Add a new movie!</h1>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" id="title" placeholder="">
      </div>
      <div class="form-group col-5">
        <label for="director">Director</label>
        <input type="text" class="form-control" id="director" placeholder="">
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="year">Release Year</label>
        <input type="text" class="form-control" id="year" placeholder="">
      </div>
      <div class="form-group col-5">
        <label for="rating">Movie Rating</label>
        <select class="form-control" id="rating">
        <option value=5>5</option>
        <option value=5>5</option>
        <option value=5>5</option>
        <option value=5>5</option>
        <option value=5>5</option>
        </select>
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="posterURL">URL for Movie Poster</label>
        <input type="text" class="form-control" id="posterURL" placeholder="">
        <small id="trailerHelp" class="form-text text-muted">Please copy 'image address' from IMDb</small>
      </div>
      <div class="form-group col-5">
        <label for="trailerEmbed">URL for Trailer</label>
        <input type="text" class="form-control" id="trailerEmbed" placeholder="">
        <small id="trailerHelp" class="form-text text-muted">Please copy the web link from IMDb's trailer</small>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="storyline">IMDb Movie Synopsis</label>
        <textarea class="form-control" id="storyline" rows="4"></textarea>
      </div>
    </div>
    <button type="submit" id="submit" class="btn btn-warning">Submit</button>
  </form>
  <p id="alert" class="mt-5"><p>
  `
}

function editFormTempate(movie){
  const {posterURL, title, year, director, storyline, trailerEmbed, rating} = movie.data.movie[0]
  return `
  <form>
    <h1 class="mb-5">Add a new movie!</h1>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" id="title" placeholder="" value=${title}>
      </div>
      <div class="form-group col-5">
        <label for="director">Director</label>
        <input type="text" class="form-control" id="director" placeholder="" value=${director}>
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="year">Release Year</label>
        <input type="text" class="form-control" id="year" placeholder="" value=${year}>
      </div>
      <div class="form-group col-5">
        <label for="rating">Movie Rating</label>
        <select class="form-control" id="rating">
          <option selected value=5>5</option>
          <option value=5>5</option>
          <option value=5>5</option>
          <option value=5>5</option>
          <option value=5>5</option>
        </select>
      </div>
    </div>
    <div class="row d-flex justify-content-between">
      <div class="form-group col-5">
        <label for="posterURL">URL for Movie Poster</label>
        <input type="text" class="form-control" id="posterURL" placeholder="" value=${posterURL}>
        <small id="trailerHelp" class="form-text text-muted">Please copy 'image address' from IMDb</small>
      </div>
      <div class="form-group col-5">
        <label for="trailerEmbed">URL for Trailer</label>
        <input type="text" class="form-control" id="trailerEmbed" placeholder="" value="http://www.imdb.com/title/tt1430612/videoplayer/${trailerEmbed}">
        <small id="trailerHelp" class="form-text text-muted">Please copy the web link from IMDb's trailer</small>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-12">
        <label for="storyline">IMDb Movie Synopsis</label>
        <textarea class="form-control" id="storyline" rows="4">${storyline}</textarea>
      </div>
    </div>
    <button type="submit" id="submit" class="btn btn-warning">Submit</button>
  </form>
  <p id="alert" class="mt-5"><p>
  `
}
