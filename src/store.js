import {reactive} from 'vue'

export const store = reactive({
    show: false,
    charactersLength: null,
    characters: null,
    error: null,
    categorySelector: 'All',
    API_URL: 'https://www.breakingbadapi.com/api/characters',
})