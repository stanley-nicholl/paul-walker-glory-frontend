const pwClips = [
  `https://www.youtube.com/embed/XPNRaxjn0pA?autoplay=1`,
  `https://www.youtube.com/embed/gzZneHF83dc?autoplay=1`,
  `https://www.youtube.com/embed/cPov4oSHn3w?autoplay=1`,
  `https://www.youtube.com/embed/Tk-Eja2vMs4?autoplay=1`,
  `https://www.youtube.com/embed/bbkcuJLHRW0?autoplay=1`
]

function loadRandomClip(){
  const video = Math.floor((Math.random()*pwClips.length))
  document.getElementById('video-area').innerHTML = randomVideoTemplate(pwClips[video])
}

loadRandomClip()

const random = document.getElementById('roll')
random.addEventListener('click', (e) => {
  location.reload()
})
