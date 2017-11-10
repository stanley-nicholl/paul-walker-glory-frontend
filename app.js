const localhostURL = 'http://localhost:3000/movies'
const herokuURL = 'https://paul-walker-superstar.herokuapp.com/movies'
const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

loadList()
