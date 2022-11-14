import {reactive} from 'vue'

export const store = reactive({
    show: 0,
    charactersLength: null,
    characters: null,
    error: null,
    API_URL: 'https://www.breakingbadapi.com/api/characters',
})