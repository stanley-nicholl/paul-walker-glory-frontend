function randomVideoTemplate(video){
  return `
  <div class="wrapper mb-5">
    <div class="h_iframe">
        <iframe height="2" width="2" src=${video} frameborder="0" allowfullscreen></iframe>
    </div>

  </div>
  <button type="button" class="btn btn-light" id="roll">Watch more random glory</button>
  `
}
