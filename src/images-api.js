const axios = require('axios').default;

export default class ImagesApi {
  constructor() {
    this.query = '';
    this.page = 1;
    this.per_page = 40;
  }
  async fetchImages() {
    try {
      const r = await axios.get(
        `https://pixabay.com/api/?key=33235528-f77f5559eb18b5179aa92c19b&q=${this.query}&safesearch=true&image_type=photo&orientation=horizontal&per_page=${this.per_page}&page=${this.page}`
      );
      this.getNewPage();
      return r.data;
    } catch (error) {
      console.log(error.message);
    }
  }
  getNewPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get searchQuery() {
    return this.query;
  }
  set searchQuery(newQuery) {
    this.query = newQuery;
  }
}
