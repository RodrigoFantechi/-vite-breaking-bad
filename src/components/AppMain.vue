<script>
import { store } from '../store.js'
import axios from 'axios'
import CharactersList from './CharactersList.vue'
import Filter from './Filter.vue'
export default {
   name: 'AppMain',
   components: {
      CharactersList,
      Filter,
   },
   data() {
      return {
         store,
      }
   },
   methods: {
      filterActor() {
         let url = store.API_URL;
         if (this.store.categorySelector !== 'All'){
            const searchActor = this.store.categorySelector
            url = `${this.store.API_URL}?category=${searchActor}` 
         } 
         

         axios.get(url).then(response => {
            console.log(response);
            this.store.characters = response.data
            this.store.charactersLength = response.data.length

         }).catch(err => {
            console.log(err.message);

         })
      }
   },
}
</script>

<template>
   <main>
      <div class="container pb-5">
         <Filter @findActor="filterActor" />
         <CharactersList />
      </div>
   </main>
</template>

<style lang="scss" scoped>
.form-select {
   width: auto;
}
</style>
