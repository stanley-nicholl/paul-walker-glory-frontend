// -----UPDATE WITH VARIABLES

function listTemplate(movie){
  const {posterURL, title, year, rating, id} = movie
  return `
    <tr>
      <td><img class="movie-poster" src=${posterURL} alt="movie poster"></td>
      <td><h5 class="title font-weight-bold">${title}</h5></td>
      <td class="text-center"><h6 class="year">${year}</h6></td>
      <td class="text-center"><h6 class="rating">${rating}</h6></td>
      <td class="text-right"><button type="submit" id="${id}" class="btn btn-dark">See Details</button></td>
    </tr>
  `
}

//
//
// <div class="row list-items mb-5">
//   <div class="col-lg-1 col-sm-0">
//     <img class="movie-poster" src=${posterURL} alt="movie poster">
//   </div>
//   <div class="col-md-4 col-3 d-flex align-items-center">
//     <h5 class="title font-weight-bold">${title}</h5>
//   </div>
//   <div class="col-2 d-flex align-items-center justify-content-center">
//     <h6 class="year">${year}</h6>
//   </div>
//   <div class="col-1 d-flex align-items-center justify-content-center">
//     <h6 class="rating">${rating}</h6>
//   </div>
//   <div class="col-4 d-flex align-items-center justify-content-end">
//     <button type="submit" id="${id}" class="btn btn-dark">See Details</button>
//   </div>
// </div>
