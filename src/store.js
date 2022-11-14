import {reactive} from 'vue'

export const store = reactive({
    charactersLength: null,
    characters: null,
    error: null,
    API_URL: 'https://www.breakingbadapi.com/api/characters',
})