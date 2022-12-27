import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  show: false,
  charactersLength: null,
  characters: null,
  error: null,
  categorySelector: 'All',
  API_URL: 'https://www.breakingbadapi.com/api/characters',
  callApi (url) {
    axios.get(url).then(resp => {
      console.log(resp);
      this.characters = resp.data
      this.charactersLength = resp.data.length
      this.show = true

    }).catch(err => {
      console.error(err.message);
      this.error = err.message
    })
  }
});

