

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
    movie.trailerEmbed = document.getElementById('trailerEmbed').value
    movie.storyline = document.getElementById('storyline').value
    console.log(storyline);
    // if (!checkPW(movie.title)){
    //   document.getElementById('alert').innerHTML = `Trying to submit something other than a PW movie? Bye, Felicia.`
    //   setTimeout(kickout(), 3000);
    //   return null
    // }

    if(typeof movie.year === NaN){
      console.log('if');
      document.getElementById('alert').innerHTML = `Release year must be a number`
    }else if(!movie.title || !movie.director || !movie.year || !movie.rating || !movie.posterURL || !movie.trailerEmbed || !movie.storyline){
      console.log(movie.year);
      console.log('elseif');
      document.getElementById('alert').innerHTML = `All fields are required to add a movie`
    }else{
      console.log('else');
      Movie.create(movie)
        .then(result => {
          loadDetail(result.data.movie[0].id)
        })
    }
  })
}

function checkPW(title){
  if(pwMovies.includes(title)){
    return 1
  }else{
    return 0
  }
}

function kickout() {
  localStorage.setItem('pwBanned', 'true')
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}
