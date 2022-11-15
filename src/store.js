import {reactive} from 'vue'
import axios from 'axios'

export const store = reactive({
    show: false,
    charactersLength: null,
    characters: null,
    error: null,
    categorySelector: 'All',
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    methods: {
        callApi(url) {
          axios.get(url).then(resp => {
            console.log(resp);
            store.characters = resp.data
            store.charactersLength = resp.data.length
            store.show=true
    
          }).catch(err => {
            console.error(err.message);
            store.error = err.message
          })
        }
      },
});

