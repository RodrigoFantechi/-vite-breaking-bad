<script>
import { store } from '../store'
import CharactersNumbers from './CharactersNumbers.vue'
import SingleCharacter from './SingleCharacter.vue'
export default {
    name: 'CharactersList',
    components: {
        SingleCharacter,
        CharactersNumbers,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="characters p-5">
        <CharactersNumbers />
        <div class="characters_cards">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
                    <SingleCharacter />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.characters {
    background-color: #FFFFFF;

}
</style>