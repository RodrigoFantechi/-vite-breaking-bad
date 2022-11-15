import {reactive} from 'vue'

export const store = reactive({
    show: false,
    charactersLength: null,
    characters: null,
    error: null,
    API_URL: 'https://www.breakingbadapi.com/api/characters',
})