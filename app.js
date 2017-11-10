const localhostURL = 'http://localhost:3000/movies'
const herokuURL = 'https://paul-walker-glory.herokuapp.com/movies'
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

loadList()

const banned = localStorage.getItem('pwBanned')

if(banned === 'true'){
  window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}
