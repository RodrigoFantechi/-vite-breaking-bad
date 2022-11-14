<script>
import { store } from '../store'
export default {
    name: 'SingleCharacter',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="col" v-for="character in store.characters">
        <div class="my_card p-3 text-center">
            <div class="image">
                <img :src="character.img" :alt="character.name">
            </div>
            <h6 class="mt-2">{{ character.name }}</h6>
            <div class="info">
                <p>{{ character.category }}</p>
                <p>{{ character.status }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    .my_card {
        background-color: #2E3A46;
        height: 100%;
        h6{
            text-transform: uppercase;
        }


        image {
            width: 180px;
            height: 260px;

            img {
                width: 100%;
                object-fit: contain;
            }
        }

        .info {
            color: #7D7977;
            margin-top: 0.5rem;

            p {
                margin-bottom: 0;
            }
        }
    }
}
</style>