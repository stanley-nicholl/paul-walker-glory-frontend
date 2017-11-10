window.Movie = {
  getAll () {
    return axios.get(`${baseURL}`)
  },
  getOne (id) {
    return axios.get(`${baseURL}/${id}`)
  },
  create (body) {
    return axios.post(`${baseURL}`, body)
  },
  destroy (id) {
    return axios.delete(`${baseURL}/${id}`)
  },
  update (id, body) {
    return axios.put(`${baseURL}/${id}`, body)
  }
}
