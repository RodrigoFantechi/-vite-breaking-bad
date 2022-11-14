<script>
import {store} from '../store' 
import SingleCharacter from './SingleCharacter.vue'
export default {
    name: 'CharactersList',
    components: {
        SingleCharacter
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
    <div class="characters_numbers p-3 mb-3">
        <h3>Found {{store.charactersLength}} characters</h3>
    </div>
    <div class="characters_cards">
        <div class="container">
            <div class="row row-cols-5 g-3"><SingleCharacter/></div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
.characters{
    background-color: #FFFFFF;
    .characters_numbers{
        background-color: #212529;
        h3{
            font-weight: bold;   
        }
        font-weight: bold;
    }
}
</style>